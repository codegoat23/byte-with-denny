import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,    // Default Vite port
    open: true,    // Automatically open the browser
    historyApiFallback: true,  // Important for SPA routing
  },
  
})
