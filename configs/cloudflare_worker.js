addEventListener('fetch', event => {
  event.respondWith(handle(event.request))
})

async function handle(request) {
  const url = new URL(request.url)
  if (url.pathname.startsWith('/vless')) {
    // Read backend origin from environment (`wrangler.toml` vars) if provided.
    // In Wrangler/Workers environment variables are available as globals.
    const DEFAULT_BACKEND = 'https://YOUR_VPS_DOMAIN_OR_ORIGIN:10000'
    const backendOrigin = (typeof BACKEND_ORIGIN !== 'undefined')
      ? BACKEND_ORIGIN
      : DEFAULT_BACKEND
    const backend = backendOrigin + url.pathname + url.search
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
