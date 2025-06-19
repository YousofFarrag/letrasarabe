import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
   // <-- This must match your repo name!
  plugins: [react()],
  base: '/arabepresente2025/',
});
