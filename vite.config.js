// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/emoil/', 
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/emoil/', 
  server: {
    proxy: {
      // Proxy requests to the 3CX server
      '/api': {
        target: 'https://emoilplovdiv.3cx.ro',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // removes '/api' prefix
      },
    },
  },
});
