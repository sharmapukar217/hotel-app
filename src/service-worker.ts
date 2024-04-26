/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

import { build, files, version } from "$service-worker";

const CACHE = `cache-${version}`;

const ASSETS = [...build, ...files];

sw.addEventListener("install", (event) => {
  async function addFilesToCacheAndSkipWaiting() {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
    await sw.skipWaiting();
  }

  event.waitUntil(addFilesToCacheAndSkipWaiting());
});

sw.addEventListener("activate", (event) => {
  async function deleteOldCachesAndClaimClients() {
    for (const key of await caches.keys()) {
      if (key !== CACHE) await caches.delete(key);
    }

    await sw.clients.claim();
  }

  event.waitUntil(deleteOldCachesAndClaimClients());
});

sw.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  async function respond() {
    const url = new URL(event.request.url);
    const cache = await caches.open(CACHE);

    const cacheMatch = await cache.match(event.request);
    if (ASSETS.includes(url.pathname) && cacheMatch) return cacheMatch;

    try {
      const response = await fetch(event.request);

      if (response.status === 200) {
        await cache.put(event.request, response.clone());
      }

      return response;
    } catch {
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) return cachedResponse;

      return new Response(
        "Something went very wrong. Try force closing and reloading the app.",
        { status: 408, headers: { "Content-Type": "text/html" } },
      );
    }
  }

  event.respondWith(respond());
});
