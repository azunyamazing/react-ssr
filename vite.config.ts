import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    assetsDir: '.',
    rollupOptions: {
      output: {
        entryFileNames: 'client.js',
      }
    }
  },
  plugins: [react()],
})