import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 5174,
    },
  },
});
