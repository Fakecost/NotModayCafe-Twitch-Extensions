import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  build: {
    minify: false, // ❗️ปิด minify เพื่อให้โค้ด readable
  },
});