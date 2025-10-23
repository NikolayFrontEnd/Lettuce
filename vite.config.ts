import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: ['src/__tests__/setup.ts'], 

    include: [
      'src/__tests__/**/*.{test,spec}.{ts,tsx}', 
      'src/**/*.{test,spec}.{ts,tsx}',         
    ],
  },
})