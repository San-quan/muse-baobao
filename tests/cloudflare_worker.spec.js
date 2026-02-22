/**
 * Tests for configs/cloudflare_worker.js
 * Validates that the worker reads BACKEND_ORIGIN from the environment and
 * falls back to the built-in default when the variable is not set.
 */

// Re-implement the core routing logic from cloudflare_worker.js so we can
// unit-test it without needing a full Cloudflare Workers runtime.
function buildBackendUrl (pathname, search, backendOriginEnv) {
  const DEFAULT_BACKEND = 'https://YOUR_VPS_DOMAIN_OR_ORIGIN:10000'
  const backendOrigin = (typeof backendOriginEnv !== 'undefined' && backendOriginEnv)
    ? backendOriginEnv
    : DEFAULT_BACKEND
  return backendOrigin + pathname + search
}

describe('cloudflare_worker BACKEND_ORIGIN handling', () => {
  test('uses BACKEND_ORIGIN env var when provided', () => {
    const url = buildBackendUrl('/vless/ws', '?key=1', 'https://my-vps.example.com:10000')
    expect(url).toBe('https://my-vps.example.com:10000/vless/ws?key=1')
  })

  test('falls back to default when BACKEND_ORIGIN is undefined', () => {
    const url = buildBackendUrl('/vless/ws', '', undefined)
    expect(url).toBe('https://YOUR_VPS_DOMAIN_OR_ORIGIN:10000/vless/ws')
  })

  test('falls back to default when BACKEND_ORIGIN is an empty string', () => {
    const url = buildBackendUrl('/vless/ws', '', '')
    expect(url).toBe('https://YOUR_VPS_DOMAIN_OR_ORIGIN:10000/vless/ws')
  })

  test('preserves query string when forwarding', () => {
    const url = buildBackendUrl('/vless/connect', '?token=abc&v=2', 'https://backend.example.com:443')
    expect(url).toBe('https://backend.example.com:443/vless/connect?token=abc&v=2')
  })
})
