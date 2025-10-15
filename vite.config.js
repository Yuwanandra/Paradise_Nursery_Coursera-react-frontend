import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // The crucial change: sets the base public path when served in production
  base: '/', 
  plugins: [react()],
  build: {
    // Ensures the base is respected in the final output
    outDir: 'dist', 
  }
});