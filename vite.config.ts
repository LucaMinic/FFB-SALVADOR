import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


// The base path follows the site URL in .env: '/FFB-SALVADOR/' on GitHub Pages, '/' on the final domain.
export default defineConfig(({ mode }) => ({
  base: new URL(loadEnv(mode, process.cwd(), '').VITE_SITE_URL).pathname.replace(/\/?$/, '/'),
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  server: {
    allowedHosts: ['boring-frayed-alfalfa.ngrok-free.app', 'boring-frayed-alfalfa.ngrok-free.dev'],
  },
}))
