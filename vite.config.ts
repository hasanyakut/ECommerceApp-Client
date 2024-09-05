import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    '$': 'jQuery',
    'jQuery': 'jQuery'
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});