import {clientsClaim} from 'workbox-core'
import {precacheAndRoute} from 'workbox-precaching'
import {registerRoute} from 'workbox-routing'
import {StaleWhileRevalidate} from 'workbox-strategies'
import {ExpirationPlugin} from 'workbox-expiration'
import {cleanupOutdatedCaches} from 'workbox-precaching/cleanupOutdatedCaches'

const sha256 = (message) => {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message)

  // hash the message
  return crypto.subtle.digest('SHA-256', msgBuffer).then((hashBuffer) => {
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    // convert bytes to hex string
    const hashHex = hashArray.map((b) => ('00' + b.toString(16)).slice(-2)).join('')
    return hashHex
  })
}

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

clientsClaim()
cleanupOutdatedCaches()

// wasm cache router
registerRoute(
  new RegExp('/.*\\.wasm$', 'i'),
  new StaleWhileRevalidate({
    cacheName: 'wasm-modules',
    networkTimeoutSeconds: 20,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 5,
        maxAgeSeconds: 90 * 24 * 60 * 60, // 90 days
        purgeOnQuotaError: true
      })
    ]
  })
)

const cachedAssets = self.__WB_MANIFEST

sha256(JSON.stringify(cachedAssets)).then((rev) => {
  const revision = `${rev}-v1`
  precacheAndRoute([
    // favicons
    {url: '/icon-192x192.png', revision},
    {url: '/icon-512x512.png', revision},
    {url: '/maskable_icon.png', revision},
    {url: '/favicon.svg', revision},
    {url: '/favicon.ico', revision},
    // root page
    {url: '/index.html', revision},
    // faq page
    {url: '/faq.html', revision},
    // manifest
    {url: '/manifest.json', revision}
  ])
})

precacheAndRoute(cachedAssets)
