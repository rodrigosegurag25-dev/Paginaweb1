import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' => rutas relativas, sirve en cualquier carpeta del hosting
export default defineConfig({
  base: './',
  plugins: [react()],
})
