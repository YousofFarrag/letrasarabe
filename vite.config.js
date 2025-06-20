import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/arabepresente2025/', // REMOVE or comment out for Vercel
});
