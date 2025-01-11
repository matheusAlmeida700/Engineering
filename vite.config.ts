import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Usando o path nativo
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Caminho correto para o src
    },
  },
});
