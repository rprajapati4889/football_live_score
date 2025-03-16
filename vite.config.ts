import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://api.sportmonks.com/v3/football',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            // Add the API key as a query parameter
            const url = new URL(proxyReq.path, 'https://api.sportmonks.com');
            url.searchParams.append('api_token', 'VofvtMUPatdjTrcl3obJ0QQXiIaRkicRx3kYsnnOFWcKxKJS2CuydHBZMY3H');
            proxyReq.path = `${url.pathname}${url.search}`;
          });
        }
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
