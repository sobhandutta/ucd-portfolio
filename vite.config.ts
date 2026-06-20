import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: '/ucd-portfolio/',
  build: {
    outDir: 'dist',
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
