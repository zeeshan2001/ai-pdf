export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname === '/api/hello') {
      return new Response(JSON.stringify({ message: 'Hello from Cloudflare Worker!' }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
    if (url.pathname.startsWith('/api/')) {
      // Proxy to Express backend
      const backendUrl = `https://your-express-backend-url.com${url.pathname}${url.search}`
      return fetch(backendUrl, request)
    }
    return new Response('Not found', { status: 404 })
  },
} 