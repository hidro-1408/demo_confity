'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {
  ".git/COMMIT_EDITMSG": "08c032e0f99310cf9b72b38b9a5ef05b",
  ".git/config": "624b28ce6802601f4812af5c66d777d1",
  ".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
  ".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
  ".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
  ".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
  ".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
  ".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
  ".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
  ".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
  ".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
  ".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
  ".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
  ".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
  ".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
  ".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
  ".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
  ".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
  ".git/index": "f99b1ff2786bed6841d0678417f1f8da",
  ".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
  ".git/logs/HEAD": "8bb50f44c7e5a9b18421c4c892238075",
  ".git/logs/refs/heads/master": "8bb50f44c7e5a9b18421c4c892238075",
  ".git/logs/refs/remotes/origin/master": "3054d1622d53f450b5f502d79df6273f",
  ".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
  ".git/objects/14/6ec99b68506d29cf1683d6c3b5700d8e7c8d0e": "e9bd7a9263af2d1a619dee533a91acea",
  ".git/objects/15/c6b3f4dd940c21142fd9cf8ddffcdca6da4055": "a5733b852d737bc4903511983bf34678",
  ".git/objects/1a/303b659c9893c849c4cdb3bb48b6240f97ee15": "08e8771b768b55c5cdad24622f8bf355",
  ".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
  ".git/objects/25/0a4e1d84112b2ff036df3e49dacdf914ef5289": "d8b59b28047b08ec7d39f18d869fd8a1",
  ".git/objects/2b/2fbaaca49f1e131ed76f2f23f4585983819f79": "3e7b72dcf18317b9e85db3e2a4ca6fbe",
  ".git/objects/2f/f0a0147e5c67c461e607fef2a62a66be93486e": "427be0897300144eab79ef391ba0081d",
  ".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
  ".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
  ".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
  ".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
  ".git/objects/44/80cf0e19f352c2c7dac19abda9abaf9afe2770": "35b9c147537fa711e97c4a023d79514c",
  ".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
  ".git/objects/49/eac84fbee604e48cc581fd5b282469410510ff": "fdb99f749931dc73a478bd2bd34bec36",
  ".git/objects/4d/86351ddf4fe6a88c1600174fce80aa78fe60bb": "bd3f3409ec6388b2ebf6181459bbd306",
  ".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
  ".git/objects/5d/688438c23e700755e431d1802918861990482d": "c0052af5845ff4322bfb95d068d9db20",
  ".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
  ".git/objects/68/c56bbc802031fcccf82b833aa9e40d07b2e110": "f5a8e4b98a67e58ad8e989960ecf355c",
  ".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
  ".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
  ".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
  ".git/objects/73/85576e9f077323d85ceee5d2660920f2c0c412": "237ff3000173f8f21d3edfb3aa8a9c11",
  ".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
  ".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
  ".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
  ".git/objects/8b/9a7cb95788e3876088d590b0689d1f8d9ec7e2": "13ec6a650e4f486c515e36ac7ffb5b22",
  ".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
  ".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
  ".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
  ".git/objects/9c/9858a90330d466a2a58774d3ff0fcb2df3a927": "7450adfeeb136528448f9c9c43c2905a",
  ".git/objects/a4/babf11af6b08e49e4a01ee2365b9aa10564ec0": "677ce26da6d3bf4150559c36c4ae6c78",
  ".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
  ".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
  ".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
  ".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
  ".git/objects/bd/88a1deeb7b84a42100b9bd047742f150ca33a4": "c4a180d7414c282b631dfe04bd705fb7",
  ".git/objects/c6/4b63ae0f518b42c703ba5f649a13fdeffcc566": "346f2348488018209408ed1ffcdf491e",
  ".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
  ".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
  ".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
  ".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
  ".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
  ".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
  ".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
  ".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
  ".git/objects/ee/a543ffa2601a91daa5818283269d60764c5d65": "d980e4284da29d0d0df73b5f32845731",
  ".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
  ".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
  ".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
  ".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
  ".git/objects/fd/0355defb7adb4fb459c0815fe98f2a4660317c": "95cc6e226474766b74d0b8b90d3da38a",
  ".git/refs/heads/master": "22cd3f8777467805c7a3b8ce3848a4c2",
  ".git/refs/remotes/origin/master": "22cd3f8777467805c7a3b8ce3848a4c2",
  "assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
  "assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
  "assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
  "assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
  "assets/NOTICES": "a1908c50cf32325e94d005c9882f68a7",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
  "assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
  "canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
  "canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
  "canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
  "canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
  "canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
  "canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
  "canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
  "canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
  "canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
  "canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
  "canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
  "canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
  "flutter.js": "76f08d47ff9f5715220992f993002504",
  "flutter_bootstrap.js": "2d76241cd34ce16ba4ff2a117b67bb5f",
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
  "icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
  "icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
  "index.html": "9b3e84aebefc0edfefcceadad29063d0",
  "/": "9b3e84aebefc0edfefcceadad29063d0",
  "main.dart.js": "b42b93644c35c161fb6967b8bd20eb1a",
  "manifest.json": "8baab1f9fb0c1787d86ac10b25ea9bbb",
  "version.json": "51e36e29223466d40acd82789a6284b9"
};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
  "index.html",
  "flutter_bootstrap.js",
  "assets/AssetManifest.bin.json",
  "assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, { 'cache': 'reload' })));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function (event) {
  return event.waitUntil(async function () {
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
    .then((cache) => {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
