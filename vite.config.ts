import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Exemplo-Site-PetShop/',
  plugins: [react()],
})
