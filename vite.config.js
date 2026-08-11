import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Serves static HTML under public/recs/** in dev, including directory-style
// URLs (e.g. /recs/manual/ -> public/recs/manual/index.html). Without this,
// Vite's SPA fallback would serve the React app and redirect to the home page.
function recsStaticFallback() {
  return {
    name: 'recs-static-fallback',
    configureServer(server) {
      const publicDir = server.config.publicDir
      server.middlewares.use((req, res, next) => {
        const urlPath = decodeURIComponent((req.url || '').split('?')[0])
        if (!urlPath.startsWith('/recs/')) return next()

        let filePath = path.join(publicDir, urlPath)
        try {
          if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            filePath = path.join(filePath, 'index.html')
          }
          if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(fs.readFileSync(filePath))
            return
          }
        } catch {
          // fall through to Vite's default handling
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), recsStaticFallback()],
})
