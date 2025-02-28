import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/client/",
  define: {
    'process.env.VITE_API_URL': JSON.stringify('https://server-hnbg.onrender.com'),
  },
}) 
