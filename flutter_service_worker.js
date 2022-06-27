'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cbda006767c9fb8f7ec6d14ba37e73f0",
"index.html": "a0a299db064ca7ac64b58f8f90ea77aa",
"/": "a0a299db064ca7ac64b58f8f90ea77aa",
"main.dart.js": "71c7b5129ad43fb46f47eb78927b53fe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7c6c8616ba15e293a1058f2571c06fb6",
"assets/AssetManifest.json": "7790ac3a7d6904e3199d7c00c4734788",
"assets/NOTICES": "2111fe78122d939327181331ceebabc0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/wrong.png": "818d273eee77dae5024a5e8aacf8b2a5",
"assets/assets/medal_30.png": "387b3fc9a4d1325d7017d82555a3d99a",
"assets/assets/tick.png": "a5263855306a8f00854b3b7edcf7fd22",
"assets/assets/submit_en.png": "4c1b4f438e515082a422485d33d03e08",
"assets/assets/rules.png": "e19c68dee2e0f4df5242ae25f5506de1",
"assets/assets/fr_terms.pdf": "fc58d354a701576ec698201bca052d39",
"assets/assets/french.png": "b24757f6642634fe46bd6bd5c24ef944",
"assets/assets/app_icon.png": "246a90b75b2c67bc25bdd0a708b5a0ac",
"assets/assets/submit_fr.png": "26cddb56354b6f793f1de20af652a1d9",
"assets/assets/en_terms.pdf": "53482ee17247d61689e7174f861d8322",
"assets/assets/eq_icon.png": "22a986e1391e59faa7efa3378846ff6f",
"assets/assets/medal_90.png": "3368d67d71484faca214a7736be5f2f5",
"assets/assets/effect.png": "facd3df035274e905150e7af86657fde",
"assets/assets/home.jpg": "6198164017ce840e8afd1d91e7cd906c",
"assets/assets/placeholder.png": "7b5716be5623dff8d85feb2b812986e5",
"assets/assets/eq_splash2.png": "987ad9f0570b4c49de1d79862999288f",
"assets/assets/splash.jpg": "1c9b05120e0703a81cee455a0b9e143d",
"assets/assets/eq_splash3.png": "6beb36a32a8799d52a2e19175a6e7ae3",
"assets/assets/complete2.png": "b642cff866ae9e2f1a331fd901a25bcc",
"assets/assets/menu.png": "8a4e88cffd6a9a02dc6eaccc1d2a6c88",
"assets/assets/title_logo.png": "8a7d3f339405f01ce81282d0b49dd1d0",
"assets/assets/wink.png": "6df069d1d8a16e84d9ce65272affffab",
"assets/assets/complete1.png": "89eecb1b668b0356f7bf233d398e39a8",
"assets/assets/quiz_placeholder.png": "5efa4274f759b08a6b40f1dabeaf7034",
"assets/assets/eq_splash4.png": "40c43982fb9fffea14f51667e73b12d7",
"assets/assets/university.png": "83377d47174f80877cc19ddced43f19a",
"assets/assets/medal_0.png": "0951e3ed1695427b27e4b1b20dea8c96",
"assets/assets/medal.png": "52bf9f4e55df438c8c367b902fa44ed3",
"assets/assets/medal_60.png": "f2356c4b73daaa7a6187545469944efe",
"assets/assets/clock.png": "0bd5c79a8b47e78e25bd1853d0ee5b60",
"assets/assets/pdf.png": "e687c0a16467cf23603786279cc78bdf",
"assets/assets/eq_splash.png": "a7476ad7c73deb959bd7dd6ebfb28ee2",
"assets/assets/back.png": "33079c29fcb337da9779f1326a3b2e86",
"assets/assets/quiz.png": "dd4fe1df8d3f3b249a562600bd31cb7b",
"assets/assets/quiz.jpg": "1607716b01a0e45da4c3f2f8097897b1",
"assets/assets/lightbulb.png": "fc8928735c42a0eb56d5734cbc3ee294",
"assets/assets/english.jpg": "9dab1d4b0fe9eef7d384113d127f8f9c",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
