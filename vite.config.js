import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/Math-Project-Website/',
  plugins: [vue()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
