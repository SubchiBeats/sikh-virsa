/* ============================================================================
   Virsa — service worker
   Network-first for same-origin GETs (always fresh online), with a cached
   fallback so the app works offline. Cross-origin requests (fonts, maps,
   audio) are left to the network. Bump CACHE on each meaningful deploy.
   ========================================================================== */
var CACHE = "virsa-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/styles.css",
  "./assets/img/icon.svg",
  "./assets/js/data-figures.js",
  "./assets/js/data-stories.js",
  "./assets/js/data-gurbani.js",
  "./assets/js/data-paaths.js",
  "./assets/js/data-fives.js",
  "./assets/js/data-festivals.js",
  "./assets/js/data-glossary.js",
  "./assets/js/data-gurdwaras.js",
  "./assets/js/data-timeline.js",
  "./assets/js/data-ceremonies.js",
  "./assets/js/data-1984.js",
  "./assets/js/app.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  // Only manage same-origin requests; let cross-origin hit the network directly.
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.status === 200 && res.type === "basic") {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (cached) {
        if (cached) return cached;
        if (req.mode === "navigate") return caches.match("./index.html");
        return Response.error();
      });
    })
  );
});
