// ══ THE MASTERWOLF ICT PLAN — Auth Gate ══
// Mot de passe haché SHA-256 (jamais stocké en clair)
// Pour changer le mot de passe : remplacer ONLY la valeur de PW_HASH
// Générer un nouveau hash : https://emn178.github.io/online-tools/sha256.html
const PW_HASH = 'e63433de84d5f26061117aa06527fb1163f34215a35a123fe6da624f8cf1b306';
const SESSION_KEY = 'mw-auth-ok';

// ══ Vérification au chargement ══
(function initAuth() {
  if (sessionStorage.getItem(SESSION_KEY) === '1') {
    // Déjà authentifié dans cet onglet → masquer la gate immédiatement
    unlockApp(false);
  } else {
    // Bloquer le contenu jusqu'à authentification
    document.getElementById('login-password').focus();
  }
})();

// ══ Soumission du mot de passe ══
async function loginSubmit() {
  const input = document.getElementById('login-password').value;
  const errEl = document.getElementById('login-error');

  if (!input.trim()) {
    shakeLoginCard();
    errEl.textContent = 'Veuillez saisir votre mot de passe.';
    return;
  }

  // Hash SHA-256 via Web Crypto API (natif, aucune lib externe)
  const encoded = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
  const hashHex = Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  if (hashHex === PW_HASH) {
    sessionStorage.setItem(SESSION_KEY, '1');
    unlockApp(true);
  } else {
    errEl.textContent = '❌ Mot de passe incorrect. Réessayez.';
    shakeLoginCard();
    document.getElementById('login-password').value = '';
    document.getElementById('login-password').focus();
  }
}

// ══ Déverrouiller le contenu ══
function unlockApp(animate) {
  const gate = document.getElementById('login-gate');
  if (!gate) return;
  if (animate) {
    gate.style.transition = 'opacity 0.5s ease';
    gate.style.opacity = '0';
    setTimeout(() => gate.remove(), 520);
  } else {
    gate.remove();
  }
}

// ══ Animation erreur ══
function shakeLoginCard() {
  const card = document.querySelector('.login-card');
  if (!card) return;
  card.classList.remove('shake');
  void card.offsetWidth; // force reflow
  card.classList.add('shake');
}

// ══ Afficher/masquer le mot de passe ══
function toggleLoginEye() {
  const inp = document.getElementById('login-password');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}
