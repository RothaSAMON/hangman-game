// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Base URL for your app
  build: {
    outDir: "dist", // Output directory
    assetsDir: "assets", // Directory for static assets
  },
  server: {
    port: 3000, // Local development port (optional)
  },
});
