const cacheName = `1.5`

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache
        .addAll([
          '/'
        ])
        .then(() => self.skipWaiting())
    })
  )
})
