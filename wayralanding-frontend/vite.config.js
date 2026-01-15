import { defineConfig } from "vite";

export default defineConfig({
  server: {
    origin: "http://localhost:5173",
    strictPort: true,
    cors: true,
  },
});