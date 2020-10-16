importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c0e238fe91263a7d46b.js",
    "revision": "f55aa8d3d5ec16df5180cf99c5c5dcf6"
  },
  {
    "url": "/_nuxt/36571bde313c3acc0838.js",
    "revision": "cdcbacfa62b66c2eb45e2f873e3261d2"
  },
  {
    "url": "/_nuxt/3eece9df6953daab7874.js",
    "revision": "827679ee715e2d7f96276b4f740bb86c"
  },
  {
    "url": "/_nuxt/4ba13b320cd95296d306.js",
    "revision": "0b152aec8f91c82f99efa7d65432653c"
  },
  {
    "url": "/_nuxt/4c82a6b8dfa3343e7d38.js",
    "revision": "9eaf8c7a0e8fdd4fb67fe7adb2f77d48"
  },
  {
    "url": "/_nuxt/5573956a7580c1abf4cf.js",
    "revision": "698d14f77cf110db709131896c8c9b82"
  },
  {
    "url": "/_nuxt/944f6f81458806f9bf2f.js",
    "revision": "ddadb90db92c4daaf77086d902693fc9"
  },
  {
    "url": "/_nuxt/a6b31d440f0fb0cc7e21.js",
    "revision": "999c8fd373223539679597f650832cf9"
  },
  {
    "url": "/_nuxt/b109bdc5b6dad2c9609f.js",
    "revision": "8a2ef0f88b296fbef509be6603d5a2c8"
  },
  {
    "url": "/_nuxt/b8eb665754b3bcdd9855.js",
    "revision": "53f65bbcb9923d6bbf6980b4fd4fe2bc"
  },
  {
    "url": "/_nuxt/c5a3e5ec2faba0db0b74.js",
    "revision": "781de15ce367b43fee38144c6214e4b3"
  },
  {
    "url": "/_nuxt/e6b8993b73995144936d.js",
    "revision": "51ae9528a0d311d94e9a75cfd52c9df8"
  },
  {
    "url": "/_nuxt/e71a13a623a1c8dc5580.js",
    "revision": "8e0d99701d99a4b7530851ca62944ecd"
  },
  {
    "url": "/_nuxt/eb632c8c7ae52511f547.js",
    "revision": "058f58a34a450eb2dcbc60ef96723e50"
  },
  {
    "url": "/_nuxt/fa9347717f5159e924cb.js",
    "revision": "595a40f0b94eb15a865cc44cee82466d"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
