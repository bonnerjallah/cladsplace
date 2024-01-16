import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: '/cladsplace',
  plugins: [react()],
  
})
