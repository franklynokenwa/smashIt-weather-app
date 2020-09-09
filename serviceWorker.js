/*const cacheName = 'weather-app';
const staticAssets = [
    'index.html',
    'styles.css',
    'script.js',
    'icons',
    'site.webmanifest'
];

self.addEventListener('install', async e => {
    const cahe = await caches.open(cacheName);
    await cahe.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
})

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin){
        e.respondWith(cacheFirst(req));
    } 
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req); 
}
*/
