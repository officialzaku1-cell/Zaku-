self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("zaku-cache").then(cache => {
      return cache.addAll([
        "/off.html"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match("/off.html")
    );
  }
});


