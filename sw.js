const C='jp-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(caches.match(e.request).then(r=>{const n=fetch(e.request).then(s=>{const k=s.clone();caches.open(C).then(c=>c.put(e.request,k));return s}).catch(()=>r);return r||n}))});
