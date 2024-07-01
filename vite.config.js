import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    plugins: [react()],
    rollupOptions: {
      external: [
       // /^vercel:.*/,

        /vercel/path0/src/App.jsx/,

      ]
    }
  }
})
