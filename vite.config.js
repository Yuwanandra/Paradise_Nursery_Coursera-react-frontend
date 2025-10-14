import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Paradise_Nursery_Coursera-react-frontend/', // 👈 Required for GitHub Pages
})
