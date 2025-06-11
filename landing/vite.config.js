import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ssgPlugin } from "@wroud/vite-plugin-ssg";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: "src",
  build: {
    target: "esnext",
    outDir: "../dist",
  },
  appType: "spa", // SPA, не MPA
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "public/googlecc5376caf5e1ca32.html"),
          dest: ".",
        },
      ],
    }),
  ],
});
// https://vite.dev/config/
// export default defineConfig({
//   root: "src",
//   build: {
//     target: "esnext",
//     rollupOptions: {
//       input: {
//         index:
//           path.resolve(
//             path.dirname(new URL(import.meta.url).pathname),
//             "src/Index.jsx",
//           ) + "?ssg-entry",
//       },
//     },
//     outDir: "../dist",
//   },
//   appType: "mpa",
//   plugins: [
//     react(),
//     ssgPlugin(),
//     viteStaticCopy({
//       targets: [
//         {
//           src: path.resolve(__dirname, "public/googlecc5376caf5e1ca32.html"),
//           dest: ".",
//         },
//       ],
//     }),
//   ],
// });
