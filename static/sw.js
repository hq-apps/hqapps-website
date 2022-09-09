const offlineCheck = async (request) => {
    let resp;
    try {
        console.log("fetching...")
        resp = await fetch(request);
    } catch {
        console.log("Failed")
        resp = await caches.match("/offline.html");
    }
    console.log(resp)
    return resp
};

const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    event.waitUntil(
      addResourcesToCache([
        "/offline.html",
        "/hqapps.png"
      ])
    );
  });

// Example of returning offline.html when fetching fails
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match("/offline.html");
        })
    )
});