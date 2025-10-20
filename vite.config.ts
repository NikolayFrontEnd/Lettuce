// vite.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['__tests__/setup.ts'],

    include: [
      '__tests__/**/*.{test,spec}.{ts,tsx}', 
      'src/**/*.{test,spec}.{ts,tsx}',      
    ],
  },
})