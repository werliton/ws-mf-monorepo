import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    port: 5173
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
