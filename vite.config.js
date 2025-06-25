import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/letrasarabe/', // <--- ¡ESTO ES CLAVE!
  plugins: [react()],
});
