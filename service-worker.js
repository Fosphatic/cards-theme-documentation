/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "48f22bbb6266f3e567421f75d6f1ee02"
  },
  {
    "url": "assets/css/0.styles.09c0d57e.css",
    "revision": "89ddfb678fa02a0b961518851195c41d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.0f4038f2.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.65a0e0ff.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.a3f5163f.js",
    "revision": "16f4581ff6db380906eaf577981a8d2c"
  },
  {
    "url": "assets/js/5.9c96b5d9.js",
    "revision": "b777d4193d6dc3cace8b426bf97093b2"
  },
  {
    "url": "assets/js/6.f9877388.js",
    "revision": "afdc7f0b99f5ec13a66e631648285d88"
  },
  {
    "url": "assets/js/7.c0f27700.js",
    "revision": "88bdf9974790814db583e9304a50f330"
  },
  {
    "url": "assets/js/app.c9741d2a.js",
    "revision": "56306b81c36212627c9d0480241495c7"
  },
  {
    "url": "guide/index.html",
    "revision": "56d109ebb10cedba50db750eead08a10"
  },
  {
    "url": "guide/quickstarted.html",
    "revision": "de83955b207c65944b85857b5c4a2d8b"
  },
  {
    "url": "index.html",
    "revision": "7fc45caccacd6d13882592a6990338fc"
  },
  {
    "url": "logo.svg",
    "revision": "aac6fc2b210520365c3916bd35df87b2"
  },
  {
    "url": "settings/index.html",
    "revision": "e6f5ce6f1a33b3f30bf23e9fb50084c6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
