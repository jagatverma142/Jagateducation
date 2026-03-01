// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ✅ Base path for deployment (GitHub Pages → /Jagateducation/)
  base: "/Jagateducation/",
});
