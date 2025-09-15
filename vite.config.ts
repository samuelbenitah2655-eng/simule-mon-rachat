import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && componentTagger(), // actif seulement en dev
  ].filter(Boolean),

  // IMPORTANT pour le déploiement
  base: "/",            // tu as un domaine custom → assets depuis la racine
  publicDir: "public",  // dossier statique par défaut
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,    // utile si besoin de debug en prod
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // uniquement pour le dev local/Lovable
  server: { host: "::", port: 8080 },
}));
