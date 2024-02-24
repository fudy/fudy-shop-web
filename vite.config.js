import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
  server: {
    proxy: {
      // localhost:3000/api/fudy-shop/user => localhost:8888/api/user
      '/api/fudy-shop' : {
        target : 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/fudy-shop/, '')
      },
      // localhost:3000/api/fudy-shop-item-detail/item => localhost:8889/api/item
      '/api/fudy-shop-item-detail' : {
        target : 'http://localhost:8889',
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/fudy-shop-item-detail/, '')
      },
      // localhost:3000/api/fudy-shop-homepage/ad-list => localhost:8890/api/fudy-shop-homepage/ad-list
      '/api/fudy-shop-homepage' : {
        target : 'http://localhost:8890',
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/fudy-shop-homepage/, '')
      },
    }
  }
});