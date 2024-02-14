import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Usa el endpoint que quieres proxear
      '/api': 'http://104.248.12.189:1337'
    }
  }
});
