import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: './',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [react(), tsconfigPaths()],
});