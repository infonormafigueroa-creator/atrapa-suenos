var CACHE = 'atrapa-v2';
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k !== CACHE){ return caches.delete(k); } }));
    }).then(function(){ return self.clients.claim(); })
  );
});
self.addEventListener('fetch', function(event){
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request).then(function(res){
      try { var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(event.request, copy); }); } catch(e){}
      return res;
    }).catch(function(){ return caches.match(event.request); })
  );
});
