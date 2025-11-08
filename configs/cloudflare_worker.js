addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
  const url = new URL(request.url)
  if (url.pathname.startsWith('/vless')) {
    const backend = 'https://YOUR_VPS_DOMAIN_OR_ORIGIN:10000' + url.pathname + url.search
    const res = await fetch(backend, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'manual'
    })
    return res
  }
  return new Response('OK', { status: 200 })
}
