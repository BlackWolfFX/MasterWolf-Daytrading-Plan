// ══ THE MASTERWOLF ICT PLAN — Service Worker v3.0 ══
const CACHE_NAME = 'mw-ict-plan-v3';

// Fichiers à mettre en cache pour le fonctionnement hors ligne
const ASSETS_TO_CACHE = [
  './index.html',
  './css/style.css',
  './js/app.js',
  './assets/favicon.png',
  './assets/logo.png',
  './manifest.json'
];

// ── Installation : mise en cache de tous les fichiers ──
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ── Activation : suppression des anciens caches ──
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// ── Fetch : cache-first pour les assets, réseau pour le reste ──
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-GET
  if (event.request.method !== 'GET') return;

  // Ignorer les requêtes externes (Google Fonts, etc.)
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) {
    // Pour les fonts Google : réseau d'abord, cache fallback
    if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
      event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
      );
    }
    return;
  }

  // Pour les fichiers locaux : cache d'abord, réseau en fallback
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Mettre en cache la nouvelle ressource
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      });
    })
  );
});
