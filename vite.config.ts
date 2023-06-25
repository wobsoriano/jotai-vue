// vite.config.ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'happy-dom',
    globals: true,
  },
  plugins: [vue()],
})
