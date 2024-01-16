import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/assets/index-Q5-wuJs-.js',
        '/assets/index-yNuLEZpE.css', 
      ],
        
      assetsDir: "assets",
    }
  }
})