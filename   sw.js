// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('nlg-tournament-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/styles.css',
          '/js/main.js',
          '/images/icon.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  