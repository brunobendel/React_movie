import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react_movie",
  // proxy: {
  //   '/api': {
  //     target: 'https://brunobendel.github.io/react_movie',
  //     changeOrigin: true,
  //   },
  // },

})