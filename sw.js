// Gerado no build. Versão mwz4ew13.
const CACHE = 'sete-vidas-mwz4ew13'
const ARQUIVOS = ["./","./assets/nunito-63TK8RbS.ttf","./assets/index-DYCyNgup.css","./assets/index-CRdppx3O.js","./assets/nuvem-CHnCbUen.js","./manifest.webmanifest","./icone-192.png","./icone-512.png","./icone-maskable-512.png","./apple-touch-icon.png"]
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()))
})
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('sete-vidas-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()))
})
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url)
  if (e.request.method !== 'GET' || u.origin !== location.origin) return
  // Página: rede primeiro (pega versão nova), cache se estiver offline. Resto: cache primeiro.
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then((r) => { const c = r.clone(); caches.open(CACHE).then((x) => x.put('./', c)); return r }).catch(() => caches.match('./')))
    return
  }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)))
})
