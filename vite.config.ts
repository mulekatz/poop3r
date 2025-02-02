import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      include: ["module"],
      globals: {
        process: true,
        Buffer: true,
      },
    }),
  ],
  resolve: {
    alias: {
      // Füge Alias für problematische Module hinzu
      "@vechain/picasso": "/node_modules/@vechain/picasso/dist/index.js",
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules\/@vechain\/picasso/],
    },
  },
});
