// ══ THE MASTERWOLF ICT PLAN — Google Firebase Real-Time Cloud Sync & PWA Engine ══
(function(){
  const firebaseConfig = {
    apiKey: "AIzaSyAyzWaMAzZVxHsgniiv-YuKEKJEDQExWes",
    authDomain: "masterwolf-trading.firebaseapp.com",
    projectId: "masterwolf-trading",
    storageBucket: "masterwolf-trading.firebasestorage.app",
    messagingSenderId: "548456064105",
    appId: "1:548456064105:web:063e46cb6fe19181a76ef8"
  };

  let db = null;
  let isCloudActive = false;
  let localLastUpdated = parseInt(localStorage.getItem('mw-cloud-last-updated') || '0', 10);
  let isSyncingFromCloud = false;

  // ── 1. INITIALISATION FIREBASE ──
  function initFirebase(){
    if(typeof firebase === 'undefined'){
      console.warn('[Firebase] SDK non chargé ou bloqué par le réseau.');
      updateCloudStatusUI('offline', 'Mode Hors Ligne');
      return;
    }

    try {
      if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
      }
      db = firebase.firestore();

      // Activation de la persistance locale Firestore
      db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
        if(err.code === 'failed-precondition'){
          console.warn('[Firebase] Persistance multi-onglets déjà gérée.');
        } else if(err.code === 'unimplemented'){
          console.warn('[Firebase] Persistance non supportée par ce navigateur.');
        }
      });

      isCloudActive = true;
      updateCloudStatusUI('connected', 'Cloud Connecté');
      setupRealtimeListener();
    } catch(e) {
      console.error('[Firebase] Erreur initialisation :', e);
      updateCloudStatusUI('error', 'Erreur Cloud');
    }
  }

  // ── 2. ÉCOUTE TEMPS RÉEL (onSnapshot) ──
  function setupRealtimeListener(){
    if(!db) return;

    const docRef = db.collection('masterwolf').doc('cloud_journal');

    docRef.onSnapshot((doc) => {
      if(doc.exists){
        const cloudData = doc.data();
        const cloudTime = cloudData.lastUpdated || 0;

        // Si la mise à jour Cloud est plus récente que la version locale
        if(cloudTime > localLastUpdated){
          isSyncingFromCloud = true;
          localLastUpdated = cloudTime;
          localStorage.setItem('mw-cloud-last-updated', cloudTime.toString());

          // 1. Synchroniser le journal des trades
          if(Array.isArray(cloudData.entries)){
            localStorage.setItem('mw-entries', JSON.stringify(cloudData.entries));
            if(typeof window.refreshEntriesFromCloud === 'function'){
              window.refreshEntriesFromCloud(cloudData.entries);
            }
          }

          // 2. Synchroniser le capital
          if(cloudData.capital !== undefined && cloudData.capital !== null){
            localStorage.setItem('mw-capital', cloudData.capital.toString());
            const cpCap = document.getElementById('cp-capital');
            const calcCap = document.getElementById('calc-capital');
            if(cpCap) cpCap.value = cloudData.capital;
            if(calcCap) calcCap.value = cloudData.capital;
            if(typeof calcCockpitRisk === 'function') calcCockpitRisk();
          }

          updateCloudStatusUI('syncing', 'Synchronisé');
          if(typeof showToast === 'function'){
            showToast('☁️ Données synchronisées en direct avec le Cloud Firebase');
          }

          setTimeout(() => {
            isSyncingFromCloud = false;
            updateCloudStatusUI('connected', 'Cloud Connecté');
          }, 1500);
        }
      } else {
        // Premier lancement : Le document Cloud n'existe pas encore
        // On pousse les données locales vers le Cloud s'il y a des trades locaux
        try {
          const localEntries = JSON.parse(localStorage.getItem('mw-entries') || '[]');
          const localCap = parseFloat(localStorage.getItem('mw-capital') || '0');
          if(localEntries.length > 0 || localCap > 0){
            window.pushJournalToCloud(localEntries, localCap);
          }
        } catch(e){}
      }
    }, (error) => {
      console.warn('[Firebase] Erreur écoute Cloud :', error);
      updateCloudStatusUI('offline', 'Cloud Hors Ligne');
    });
  }

  // ── 3. POUSSER LES MODIFICATIONS VERS LE CLOUD ──
  window.pushJournalToCloud = function(entriesList, capitalVal){
    if(!db || isSyncingFromCloud) return;

    const now = Date.now();
    localLastUpdated = now;
    localStorage.setItem('mw-cloud-last-updated', now.toString());
    updateCloudStatusUI('uploading', 'Sauvegarde Cloud...');

    // Nettoyer les objets pour Firestore (supprimer les clés undefined ou fonctions)
    const cleanEntries = (entriesList || []).map(item => {
      const copy = { ...item };
      Object.keys(copy).forEach(k => {
        if(copy[k] === undefined) copy[k] = '';
      });
      return copy;
    });

    const cap = (capitalVal !== undefined && capitalVal !== null)
      ? capitalVal
      : (parseFloat(localStorage.getItem('mw-capital')) || 0);

    db.collection('masterwolf').doc('cloud_journal').set({
      entries: cleanEntries,
      capital: cap,
      lastUpdated: now,
      deviceAgent: navigator.userAgent.substring(0, 80)
    }, { merge: true })
    .then(() => {
      updateCloudStatusUI('connected', 'Cloud Connecté');
    })
    .catch((err) => {
      console.warn('[Firebase] Échec envoi Cloud :', err);
      updateCloudStatusUI('error', 'Erreur Synchro');
    });
  };

  window.pushCapitalToCloud = function(capitalVal){
    if(!db || isSyncingFromCloud) return;
    const now = Date.now();
    localLastUpdated = now;
    localStorage.setItem('mw-cloud-last-updated', now.toString());

    db.collection('masterwolf').doc('cloud_journal').set({
      capital: capitalVal,
      lastUpdated: now
    }, { merge: true }).catch(() => {});
  };

  // ── 4. INDICATEUR DE STATUT CLOUD DANS L'EN-TÊTE ──
  function updateCloudStatusUI(status, label){
    const badge = document.getElementById('cloud-status-badge');
    const text = document.getElementById('cloud-status-text');
    if(!badge || !text) return;

    badge.className = 'cloud-badge status-' + status;
    text.textContent = label;

    if(status === 'connected'){
      badge.title = 'Synchronisation Cloud Google Firebase active en direct (PC ↔ Téléphone)';
    } else if(status === 'uploading' || status === 'syncing'){
      badge.title = 'Transfert des données en cours...';
    } else {
      badge.title = 'Mode local autonome actif (Sauvegarde dans le navigateur)';
    }
  }

  // ── 5. INSTALLATION EN TANT QU'APPLICATION (ANDROID & PC) ──
  let deferredInstallPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    // Empêcher la bannière par défaut de s'afficher automatiquement
    e.preventDefault();
    deferredInstallPrompt = e;

    // Afficher le bouton d'installation sur la page
    const installBtn = document.getElementById('btn-install-app');
    if(installBtn){
      installBtn.style.display = 'inline-flex';
    }
  });

  window.triggerAppInstall = function(){
    if(!deferredInstallPrompt){
      if(typeof showToast === 'function'){
        showToast('ℹ️ Pour installer sur Android : Ouvrez le menu de Chrome (⋮) puis « Installer l\'application »');
      }
      return;
    }
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choiceResult) => {
      if(choiceResult.outcome === 'accepted'){
        if(typeof showToast === 'function'){
          showToast('🎉 MasterWolf ICT Plan installé avec succès !');
        }
        const installBtn = document.getElementById('btn-install-app');
        if(installBtn) installBtn.style.display = 'none';
      }
      deferredInstallPrompt = null;
    });
  };

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    const installBtn = document.getElementById('btn-install-app');
    if(installBtn) installBtn.style.display = 'none';
    if(typeof showToast === 'function'){
      showToast('📱 Application installée sur votre appareil !');
    }
  });

  // ── 6. ENREGISTREMENT SERVICE WORKER PWA ──
  if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => console.log('[PWA] Service Worker actif :', reg.scope))
        .catch((err) => console.warn('[PWA] Service Worker notice :', err));
    });
  }

  // ── 7. DÉMARRAGE ──
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initFirebase);
  } else {
    initFirebase();
  }
})();
