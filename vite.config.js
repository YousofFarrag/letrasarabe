import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/arabepresente2025/', // <--- ¡ESTO ES CLAVE!
  plugins: [react()],
});
