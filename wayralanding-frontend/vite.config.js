import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.glb"],
  server: {
    origin: "http://localhost:5173",
    strictPort: true,
    cors: true,
  },
});