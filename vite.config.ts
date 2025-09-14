import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

// Config OK pour :
// - Lovable (dev) : garde react-swc + lovable-tagger en DEV uniquement
// - GitHub Pages (prod) : base '/', publicDir 'publique', dist + sourcemaps

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  base: '/',               // domaine personnalisé → assets depuis la racine
  publicDir: 'publique',   // ton dossier statique
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,       // utile pour diagnostiquer une page blanche
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './source'), // ✅ plus de "./src"
    },
  },
  server: {
    host: '::',
    port: 8080,
  },
}))
