import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from your local network
    port: 3000, // Specify the port you want (default is 3000)
    open: true, // Optional: Automatically open the app in the browser
  },
})
