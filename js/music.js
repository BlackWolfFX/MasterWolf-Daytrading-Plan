// ══ THE MASTERWOLF ICT PLAN — Zen Audio Player & Ambient Canvas Engine ══
(function(){
  // ── 1. AMBIENT ZEN CANVAS PARTICLES ENGINE ──
  let canvas, ctx;
  let particles = [];
  let glowOrbs = [];
  let animFrameId = null;
  let mouse = { x: -1000, y: -1000, radius: 120 };
  let particlesEnabled = localStorage.getItem('mw-zen-enabled') !== 'false';

  let zenColors = {
    primaryRgb: '232, 201, 122',
    secondaryRgb: '201, 168, 76',
    sparkRgb: '255, 248, 220'
  };

  function initAmbientCanvas(){
    canvas = document.getElementById('zen-canvas');
    if(!canvas) return;
    ctx = canvas.getContext('2d');
    if(!ctx) return;

    // Detect theme on start
    const curTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('mw-theme') || 'dark';
    window.updateZenThemeColors(curTheme);

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    }, { passive: true });

    // Create 60 stardust particles
    particles = [];
    const count = Math.min(65, Math.floor((window.innerWidth * window.innerHeight) / 22000) + 25);
    for(let i = 0; i < count; i++){
      particles.push(createParticle());
    }

    if(particlesEnabled){
      canvas.style.display = 'block';
      startAnimation();
    } else {
      canvas.style.display = 'none';
    }

    syncZenButtonsUI();

    // Pause on hidden tab to save battery
    document.addEventListener('visibilitychange', () => {
      if(document.hidden){
        cancelAnimationFrame(animFrameId);
      } else if(particlesEnabled){
        startAnimation();
      }
    });
  }

  function resizeCanvas(){
    if(!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle(initial = true){
    return {
      x: Math.random() * window.innerWidth,
      y: initial ? Math.random() * window.innerHeight : window.innerHeight + 10,
      size: Math.random() * 2.8 + 1.2,
      baseAlpha: Math.random() * 0.5 + 0.35,
      alpha: 0,
      pulseSpeed: Math.random() * 0.025 + 0.01,
      pulseAngle: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.45 + 0.2),
      swaySpeed: Math.random() * 0.015 + 0.005,
      swayAngle: Math.random() * Math.PI * 2,
      swayDist: Math.random() * 0.6 + 0.2
    };
  }

  function startAnimation(){
    cancelAnimationFrame(animFrameId);
    if(!particlesEnabled) return;
    function loop(){
      drawScene();
      if(particlesEnabled){
        animFrameId = requestAnimationFrame(loop);
      }
    }
    loop();
  }

  function drawScene(){
    if(!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Draw background ambient glow orbs
    for(let i = 0; i < glowOrbs.length; i++){
      const orb = glowOrbs[i];
      orb.x += orb.vx;
      orb.y += orb.vy;
      if(orb.x < -100 || orb.x > canvas.width + 100) orb.vx *= -1;
      if(orb.y < -100 || orb.y > canvas.height + 100) orb.vy *= -1;

      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
      grad.addColorStop(0, orb.color);
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. Draw stardust particles
    for(let i = 0; i < particles.length; i++){
      const p = particles[i];

      p.pulseAngle += p.pulseSpeed;
      p.swayAngle += p.swaySpeed;
      p.x += p.vx + Math.sin(p.swayAngle) * p.swayDist;
      p.y += p.vy;

      // Mouse gentle repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if(dist < mouse.radius && dist > 0){
        const force = (1 - dist / mouse.radius) * 1.5;
        p.x += (dx / dist) * force;
        p.y += (dy / dist) * force;
      }

      // Recycle when leaving screen
      if(p.y < -20 || p.x < -20 || p.x > canvas.width + 20){
        particles[i] = createParticle(false);
        continue;
      }

      // Breathing alpha
      const currentAlpha = Math.max(0.08, Math.min(0.9, p.baseAlpha + Math.sin(p.pulseAngle) * 0.25));

      // Draw particle halo with theme colors
      const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.8);
      glowGrad.addColorStop(0, `rgba(${zenColors.primaryRgb}, ${currentAlpha})`);
      glowGrad.addColorStop(0.5, `rgba(${zenColors.secondaryRgb}, ${currentAlpha * 0.5})`);
      glowGrad.addColorStop(1, `rgba(${zenColors.secondaryRgb}, 0)`);

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Sharp central spark
      ctx.fillStyle = `rgba(${zenColors.sparkRgb}, ${Math.min(1, currentAlpha * 1.3)})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 0.7, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Hook to adapt zen particles to active theme
  window.updateZenThemeColors = function(themeId){
    const isIct = themeId && themeId.includes('ict');
    if(isIct){
      zenColors = {
        primaryRgb: '105, 240, 174', // ICT Emerald / Mint
        secondaryRgb: '0, 230, 118',  // ICT Green
        sparkRgb: '255, 255, 255'     // Pure White
      };
      glowOrbs = [
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.3, vx: 0.18, vy: 0.12, r: 160, color: 'rgba(0, 230, 118, 0.05)' },
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.6, vx: -0.15, vy: -0.14, r: 210, color: 'rgba(16, 185, 129, 0.04)' },
        { x: window.innerWidth * 0.5, y: window.innerHeight * 0.8, vx: 0.12, vy: -0.16, r: 180, color: 'rgba(255, 255, 255, 0.025)' },
        { x: window.innerWidth * 0.85, y: window.innerHeight * 0.15, vx: -0.14, vy: 0.15, r: 140, color: 'rgba(105, 240, 174, 0.04)' }
      ];
    } else {
      zenColors = {
        primaryRgb: '232, 201, 122', // Gold Light
        secondaryRgb: '201, 168, 76',  // Gold
        sparkRgb: '255, 248, 220'     // Warm White
      };
      glowOrbs = [
        { x: window.innerWidth * 0.2, y: window.innerHeight * 0.3, vx: 0.18, vy: 0.12, r: 160, color: 'rgba(201, 168, 76, 0.045)' },
        { x: window.innerWidth * 0.8, y: window.innerHeight * 0.6, vx: -0.15, vy: -0.14, r: 210, color: 'rgba(201, 168, 76, 0.035)' },
        { x: window.innerWidth * 0.5, y: window.innerHeight * 0.8, vx: 0.12, vy: -0.16, r: 180, color: 'rgba(46, 204, 113, 0.02)' },
        { x: window.innerWidth * 0.85, y: window.innerHeight * 0.15, vx: -0.14, vy: 0.15, r: 140, color: 'rgba(232, 201, 122, 0.035)' }
      ];
    }
  };

  // Toggle Zen Particles ON/OFF
  window.toggleZenParticles = function(){
    particlesEnabled = !particlesEnabled;
    localStorage.setItem('mw-zen-enabled', particlesEnabled ? 'true' : 'false');
    if(canvas){
      canvas.style.display = particlesEnabled ? 'block' : 'none';
    }
    if(particlesEnabled){
      startAnimation();
    } else {
      cancelAnimationFrame(animFrameId);
      if(ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    syncZenButtonsUI();
    if(typeof showToast === 'function'){
      showToast(particlesEnabled ? 'Ambiance Zen activée ✨' : 'Ambiance Zen désactivée ⏸️');
    }
  };

  function syncZenButtonsUI(){
    const btns = [document.getElementById('zen-toggle'), document.getElementById('mp-zen-toggle')];
    btns.forEach(b => {
      if(!b) return;
      b.classList.toggle('active', particlesEnabled);
      if(b.id === 'zen-toggle'){
        b.innerHTML = particlesEnabled ? '✨' : '💤';
        b.title = particlesEnabled ? 'Ambiance Zen active (Cliquer pour désactiver)' : 'Ambiance Zen en pause (Cliquer pour activer)';
      } else if(b.id === 'mp-zen-toggle'){
        b.innerHTML = particlesEnabled ? '✨ Zen' : '💤 Zen Off';
      }
    });
  }

  // ── 2. AUDIO PLAYER & LOCAL LIBRARY ENGINE ──
  const DB_NAME = 'MW_Zen_Audio_DB';
  const STORE_NAME = 'user_tracks';
  let db = null;

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

  function initDB(){
    return new Promise((resolve) => {
      try {
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
      } catch(e) {
        resolve();
      }
    });
  }

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

  let elPlayer, elTrackName, elTrackArtist, elPlayBtn, elEq, elProgress, elElapsed, elDuration, elVolume, elVolPct, elVolIcon, elPlaylist;

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

    const savedVol = localStorage.getItem('mw-audio-volume');
    if(savedVol !== null){
      const v = parseFloat(savedVol);
      audio.volume = v;
      if(elVolume) elVolume.value = Math.round(v * 100);
      if(elVolPct) elVolPct.textContent = Math.round(v * 100) + '%';
    } else {
      audio.volume = 0.7;
    }

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
    syncZenButtonsUI();
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

  // Window functions for UI bindings
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

  // ── 3. ROBUST STARTUP ──
  function boot(){
    initAmbientCanvas();
    initDB().then(() => {
      initPlayerDOM();
    }).catch(() => {
      initPlayerDOM();
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
