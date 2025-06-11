import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
});
