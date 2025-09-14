import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // (optionnel) si tu veux remettre lovable-tagger plus tard :
    // mode === 'development' && (await import('lovable-tagger')).componentTagger(),
  ].filter(Boolean),
  base: '/',             // domaine personnalisé → assets depuis la racine
  publicDir: 'publique', // dossier statique
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './source'),
    },
  },
  server: { host: '::', port: 8080 },
}))
