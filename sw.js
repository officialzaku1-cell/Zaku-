self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("zaku-cache").then(cache => {
      return cache.addAll([
        "./index.html",   // homepage
        "./z.html",       // checkout page
        "./checkout.html",// optional checkout confirmation
        "./success.html", // success page
        "./failed.html",  // failed page
        "./off.html"      // offline fallback
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // If request fails, show offline page
      return caches.match("./off.html");
    })
  );
});
