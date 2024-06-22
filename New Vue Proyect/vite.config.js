import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    fs: {
      allow: [
        // Agrega aquí otros directorios permitidos si es necesario
        'C:/Users/PC/OneDrive/Escritorio/LSD-VueProyect'
      ]
    }
  }
})
