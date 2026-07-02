import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// test comment
export default defineConfig({
  base: '/',
  plugins: [react()],
})
