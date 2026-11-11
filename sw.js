const CACHE = "islamic-app-v7";
const FILES = ["./", "./index.html", "./data.json", "./names.json", "./manifest.json", "./icon-192.png", "./icon-512.png", "./tasbeeh.html"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
