const CACHE_NAME = 'athan-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SCHEDULE_NOTIFICATION') {
    const { title, body, delay } = event.data;
    
    setTimeout(() => {
      self.registration.showNotification(title, {
        body: body,
        icon: 'https://raw.githubusercontent.com/ramiqaladzay0/ramadan-challenge/450380601a15e12a80be482ee5149dd6dc52a0de/D5208D5D-BECD-4A90-9B8F-B7FC0679E5FA.jpeg',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        requireInteraction: true
      });
      
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'PLAY_ATHAN' });
        });
      });
    }, delay);
  }
});
