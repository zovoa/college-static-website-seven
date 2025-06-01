import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/college-static-website-seven/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
