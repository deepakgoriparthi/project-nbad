import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project-nbad/',  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],  
  },
});
