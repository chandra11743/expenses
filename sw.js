// Offline cache for the app shell. Bump VERSION when you update index.html.
const VERSION = 'expenses-v77';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './icon-mask-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('expenses-') && k !== VERSION).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // exchange-rate API goes to network
  if (!url.pathname.startsWith(new URL('./', location).pathname)) return; // only this app's own files (other apps share the github.io site)
  // network first so updates arrive; only good responses are cached; offline falls back to the cache (and to the app page for navigations)
  e.respondWith(fetch(e.request, {cache: 'no-store'}).then(r => { if (r.ok && r.type === 'basic') { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); } return r; })
    .catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
