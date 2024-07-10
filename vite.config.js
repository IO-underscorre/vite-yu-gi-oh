import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use './src/styles/partials/mixins.scss' as *;
        @use './src/styles/partials/variables.scss' as *;
        `,
      },
    },
  },
  plugins: [vue()],
})
