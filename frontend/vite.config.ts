import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 42026,
    proxy: {
      '/api': {
        target: 'http://localhost:42027',
        changeOrigin: true,
      },
    },
  },
});
