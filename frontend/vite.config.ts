import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'


export default defineConfig({
  plugins: [
    vue()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
                 @use "@/assets/scss/abstracts/all" as *;
          @use "@/assets/scss/core/all" as *;
          @use "@/assets/scss/components/all" as *;
          @use "@/assets/scss/layout/all" as *;
          @use "@/assets/scss/sections/all" as *;
          @use "@/assets/scss/pages/all" as *;
        `
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  }
})
