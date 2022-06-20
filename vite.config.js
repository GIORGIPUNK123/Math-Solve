import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/Math-Project/',
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
