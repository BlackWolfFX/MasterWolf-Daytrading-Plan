// ══ THE MASTERWOLF ICT PLAN — Zen Audio Player & Ambient Environment ══
(function(){
  // IndexedDB for storing custom uploaded tracks locally in browser
  const DB_NAME = 'MW_Zen_Audio_DB';
  const STORE_NAME = 'user_tracks';
  let db = null;

  // Initial built-in track
  const DEFAULT_PLAYLIST = [
    {
      id: 'default_1',
      title: 'Solo Leveling OST (REVIVER Motif)',
      artist: 'Kitkit Lu Cover · MasterWolf Zen',
      src: 'music/solo-leveling-reviver.mp3',
      isLocal: false
    }
  ];

  let playlist = [...DEFAULT_PLAYLIST];
  let currentIndex = 0;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;
  const audio = new Audio();
  audio.preload = 'metadata';

  // Open IndexedDB
  function initDB(){
    return new Promise((resolve) => {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const d = e.target.result;
        if(!d.objectStoreNames.contains(STORE_NAME)){
          d.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };
      req.onsuccess = (e) => {
        db = e.target.result;
        loadSavedCustomTracks().then(resolve);
      };
      req.onerror = () => resolve();
    });
  }

  // Load custom saved tracks from IndexedDB
  function loadSavedCustomTracks(){
    return new Promise((resolve) => {
      if(!db) return resolve();
      try {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();
        req.onsuccess = () => {
          const customTracks = req.result || [];
          customTracks.forEach(t => {
            const blobUrl = URL.createObjectURL(t.blob);
            playlist.push({
              id: t.id,
              title: t.title,
              artist: t.artist || 'Piste Personnelle',
              src: blobUrl,
              isLocal: true,
              blob: t.blob
            });
          });
          resolve();
        };
        req.onerror = () => resolve();
      } catch(e) {
        resolve();
      }
    });
  }

  function saveTrackToDB(trackObj){
    if(!db) return;
    try {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put({
        id: trackObj.id,
        title: trackObj.title,
        artist: trackObj.artist,
        blob: trackObj.blob
      });
    } catch(e){}
  }

  function deleteTrackFromDB(id){
    if(!db) return;
    try {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.delete(id);
    } catch(e){}
  }

  // DOM Elements
  let elPlayer, elTrackName, elTrackArtist, elPlayBtn, elEq, elProgress, elElapsed, elDuration, elVolume, elVolPct, elVolIcon, elPlaylist, elPanel;

  function initPlayerDOM(){
    elPlayer = document.getElementById('music-player');
    elTrackName = document.getElementById('mp-track-name');
    elTrackArtist = document.getElementById('mp-track-artist');
    elPlayBtn = document.getElementById('mp-play-btn');
    elEq = document.getElementById('mp-eq');
    elProgress = document.getElementById('mp-progress');
    elElapsed = document.getElementById('mp-elapsed');
    elDuration = document.getElementById('mp-duration');
    elVolume = document.getElementById('mp-volume');
    elVolPct = document.getElementById('mp-vol-pct');
    elVolIcon = document.getElementById('mp-vol-icon');
    elPlaylist = document.getElementById('mp-playlist');
    elPanel = document.getElementById('mp-panel');

    // Restore volume
    const savedVol = localStorage.getItem('mw-audio-volume');
    if(savedVol !== null){
      const v = parseFloat(savedVol);
      audio.volume = v;
      if(elVolume) elVolume.value = Math.round(v * 100);
      if(elVolPct) elVolPct.textContent = Math.round(v * 100) + '%';
    } else {
      audio.volume = 0.7;
    }

    // Audio event listeners
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onTrackEnded);
    audio.addEventListener('play', () => setPlayingUI(true));
    audio.addEventListener('pause', () => setPlayingUI(false));
    audio.addEventListener('error', (e) => {
      console.warn('[Zen Audio] Audio load error:', e);
      setPlayingUI(false);
    });

    loadTrack(0, false);
    renderPlaylist();
    initAmbientParticles();
  }

  function formatTime(sec){
    if(isNaN(sec) || !isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function loadTrack(index, autoPlay = true){
    if(!playlist.length) return;
    if(index < 0) index = playlist.length - 1;
    if(index >= playlist.length) index = 0;
    currentIndex = index;
    const track = playlist[currentIndex];

    audio.src = track.src;
    if(elTrackName) elTrackName.textContent = track.title;
    if(elTrackArtist) elTrackArtist.textContent = track.artist;
    if(elElapsed) elElapsed.textContent = '0:00';
    if(elDuration) elDuration.textContent = '0:00';
    if(elProgress) elProgress.value = 0;

    renderPlaylist();

    if(autoPlay){
      audio.play().then(() => {
        setPlayingUI(true);
      }).catch(() => {
        setPlayingUI(false);
      });
    }
  }

  function setPlayingUI(playing){
    isPlaying = playing;
    if(elPlayBtn) elPlayBtn.innerHTML = playing ? '⏸' : '▶';
    if(elEq) elEq.classList.toggle('playing', playing);
  }

  function onLoadedMetadata(){
    if(elDuration) elDuration.textContent = formatTime(audio.duration);
  }

  function updateProgress(){
    if(!audio.duration || isNaN(audio.duration)) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    if(elProgress) elProgress.value = pct;
    if(elElapsed) elElapsed.textContent = formatTime(audio.currentTime);
  }

  function onTrackEnded(){
    if(isRepeat){
      audio.currentTime = 0;
      audio.play();
    } else if(isShuffle){
      let nextIdx = Math.floor(Math.random() * playlist.length);
      if(playlist.length > 1 && nextIdx === currentIndex){
        nextIdx = (currentIndex + 1) % playlist.length;
      }
      loadTrack(nextIdx, true);
    } else {
      mpNext();
    }
  }

  function renderPlaylist(){
    if(!elPlaylist) return;
    elPlaylist.innerHTML = playlist.map((t, idx) => `
      <div class="mp-playlist-item ${idx === currentIndex ? 'active' : ''}" onclick="window.mpPlayIndex(${idx})">
        <span class="mp-item-num">${idx === currentIndex && isPlaying ? '🔊' : (idx + 1)}</span>
        <div class="mp-item-details">
          <div class="mp-item-title">${t.title}</div>
          <div class="mp-item-artist">${t.artist}</div>
        </div>
        ${t.isLocal ? `<button class="mp-item-del" onclick="event.stopPropagation();window.mpDeleteTrack('${t.id}')" title="Supprimer">✕</button>` : ''}
      </div>
    `).join('');
  }

  // ══ Ambient Floating Zen Particles ══
  function initAmbientParticles(){
    const container = document.getElementById('zen-particles');
    if(!container) return;
    container.innerHTML = '';
    const numParticles = 24;

    for(let i = 0; i < numParticles; i++){
      const p = document.createElement('div');
      p.className = 'zen-particle';
      const size = Math.random() * 3 + 1.5;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const dur = Math.random() * 18 + 14;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.4 + 0.15;

      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${x}%`;
      p.style.top = `${y}%`;
      p.style.opacity = opacity;
      p.style.animationDuration = `${dur}s`;
      p.style.animationDelay = `-${delay}s`;

      container.appendChild(p);
    }
  }

  // Global window functions for UI calls
  window.toggleMusicPanel = function(){
    if(!elPlayer) return;
    elPlayer.classList.toggle('mp-expanded');
    elPlayer.classList.toggle('mp-minimized');
    const toggleBtn = elPlayer.querySelector('.mp-toggle-btn');
    if(toggleBtn){
      toggleBtn.textContent = elPlayer.classList.contains('mp-expanded') ? '▴' : '▾';
    }
  };

  window.mpTogglePlay = function(){
    if(audio.paused){
      audio.play().then(() => {
        setPlayingUI(true);
      }).catch(err => {
        console.warn('Autoplay prevented:', err);
      });
    } else {
      audio.pause();
      setPlayingUI(false);
    }
  };

  window.mpPrev = function(){
    loadTrack(currentIndex - 1, true);
  };

  window.mpNext = function(){
    loadTrack(currentIndex + 1, true);
  };

  window.mpPlayIndex = function(idx){
    loadTrack(idx, true);
  };

  window.mpSeek = function(val){
    if(!audio.duration || isNaN(audio.duration)) return;
    audio.currentTime = (val / 100) * audio.duration;
  };

  window.mpSetVolume = function(val){
    const v = val / 100;
    audio.volume = v;
    localStorage.setItem('mw-audio-volume', v);
    if(elVolPct) elVolPct.textContent = Math.round(val) + '%';
    if(elVolIcon){
      if(v === 0) elVolIcon.textContent = '🔇';
      else if(v < 0.4) elVolIcon.textContent = '🔉';
      else elVolIcon.textContent = '🔊';
    }
  };

  window.mpToggleMute = function(){
    if(audio.volume > 0){
      audio.dataset.prevVol = audio.volume;
      window.mpSetVolume(0);
      if(elVolume) elVolume.value = 0;
    } else {
      const prev = parseFloat(audio.dataset.prevVol || '0.7') * 100;
      window.mpSetVolume(prev);
      if(elVolume) elVolume.value = prev;
    }
  };

  window.mpToggleShuffle = function(){
    isShuffle = !isShuffle;
    const btn = document.getElementById('mp-shuffle-btn');
    if(btn) btn.classList.toggle('active', isShuffle);
  };

  window.mpToggleRepeat = function(){
    isRepeat = !isRepeat;
    const btn = document.getElementById('mp-repeat-btn');
    if(btn) btn.classList.toggle('active', isRepeat);
  };

  window.mpAddFiles = function(files){
    if(!files || !files.length) return;
    for(let i = 0; i < files.length; i++){
      const file = files[i];
      const trackId = 'custom_' + Date.now() + '_' + i;
      const cleanName = file.name.replace(/\.[^/.]+$/, "");
      const blobUrl = URL.createObjectURL(file);

      const trackObj = {
        id: trackId,
        title: cleanName,
        artist: 'Musique ajoutée',
        src: blobUrl,
        isLocal: true,
        blob: file
      };

      playlist.push(trackObj);
      saveTrackToDB(trackObj);
    }

    renderPlaylist();
    if(typeof showToast === 'function'){
      showToast(`🎵 ${files.length} musique(s) ajoutée(s) avec succès !`);
    }

    // Auto-play the first new song if currently paused
    if(audio.paused && playlist.length > 1){
      loadTrack(playlist.length - files.length, true);
    }
  };

  window.mpDeleteTrack = function(id){
    const idx = playlist.findIndex(t => t.id === id);
    if(idx === -1) return;

    deleteTrackFromDB(id);
    playlist.splice(idx, 1);

    if(idx === currentIndex){
      if(playlist.length){
        loadTrack(Math.min(idx, playlist.length - 1), isPlaying);
      } else {
        audio.pause();
        audio.src = '';
        setPlayingUI(false);
      }
    } else if(idx < currentIndex){
      currentIndex--;
    }

    renderPlaylist();
    if(typeof showToast === 'function'){
      showToast('Piste retirée de la playlist');
    }
  };

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    initDB().then(() => {
      initPlayerDOM();
    });
  });
})();
