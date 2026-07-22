import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow the temporary Cloudflare quick-tunnel hostname (changes each
    // run) to reach the dev server. Dev-only setting, not used in builds.
    allowedHosts: true,
  },
})
