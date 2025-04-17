import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

const host = 'http://localhost:5173/remoteEntry.js'// poderia setar no .env
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'vite_host',
      remotes: {
        // app_remote: `app_remote@http://localhost:5173/remoteEntry.js`,
        app_remote: {
          type: "module",
          name: "app_remote",
          entry: host, // aqui concatenar string nao funciona
        }
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ],
  server: {
    port: 5174
  }
})
