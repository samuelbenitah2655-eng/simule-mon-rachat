import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',            // domaine personnalisé → assets à la racine
  publicDir: 'publique',// ton dossier statique
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
