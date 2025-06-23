import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: '/app/',
  build: {
    outDir: path.resolve(__dirname, '../Server/Client/dist'),
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/_variables.scss" as *;

        @use "@/fonts/_fonts.scss" as *;
        `
      }
    }
  }
})
        /* @use "@/assets/_mixins.scss" as *; */