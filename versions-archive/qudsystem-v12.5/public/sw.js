// Service Worker for QudSystem Unified Site & Ecosystem
const CACHE_NAME = "qudsystem-cache-v2"
const PRECACHE_URLS = [
  "/",
  "/manifest.json",
  "/robots.txt",
  "/llms.txt",
  "/ads/qud-ad-slot.json",
  "/ads/qud-ecosystem-banner.js"
]

// Install event - precache critical assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName)
            }
          })
        )
      )
      .then(() => self.clients.claim())
  )
})

// Fetch event - network-first with cache fallback
self.addEventListener("fetch", (event) => {
  // Only handle GET requests and http/https schemes
  if (event.request.method !== "GET" || !event.request.url.startsWith("http")) {
    return
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }
        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })
        return response
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) {
          return cachedResponse
        }
        if (event.request.mode === "navigate") {
          return caches.match("/")
        }
        return new Response("Offline", { status: 503, statusText: "Offline" })
      })
  )
})
