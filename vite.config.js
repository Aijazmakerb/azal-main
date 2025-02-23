import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwind from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    plugins: [tailwind()]
  }
})
