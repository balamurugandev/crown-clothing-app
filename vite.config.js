import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    // hmr: { 
    //   clientPort: 3000,
      port:3000,
    },

 /*   port:3001,
  },
  preview: {
    port: 8080,
  },
  hmr: {
    protocol: 'wss',
    clientPort: 443,
    host: "https://balamurugandev-zany-couscous-jv4q4jq6xgqfq5wp-3001.preview.app.github.dev/"
  }*/
})
