import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5174
    }
  }
});
