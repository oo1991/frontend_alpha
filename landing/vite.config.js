import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ssgPlugin } from "@wroud/vite-plugin-ssg";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  build: {
    target: "esnext",
    rollupOptions: {
      input: {
        index:
          path.resolve(
            path.dirname(new URL(import.meta.url).pathname),
            "src/Index.jsx",
          ) + "?ssg-entry",
      },
    },
    outDir: "../dist",
  },
  appType: "mpa",
  plugins: [react(), ssgPlugin()],
});
