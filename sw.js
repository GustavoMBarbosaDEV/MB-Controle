// Desliga o app antigo (endereço /MB-Controle/). O Monetra agora fica em /Monetra/.
// Não apaga caches: o endereço novo usa o mesmo domínio e cuida dos próprios arquivos.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    await self.registration.unregister();
    const telas = await self.clients.matchAll({ type: "window" });
    telas.forEach(t => { try { t.navigate("https://gustavombarbosadev.github.io/Monetra/"); } catch (err) {} });
  })());
});
