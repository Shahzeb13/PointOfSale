import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base:"./",
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  build: {
    outDir: "dist-react"
  },
   server: {
    port: 5132,
    strictPort: true,
  },
})
