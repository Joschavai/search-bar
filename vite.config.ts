import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";


// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8082
  },
  preview: {
    port: 8082
  },
  plugins: [vue(),
  federation({
    name: "search_bar",
    filename: "search-bar-remote.js",
    exposes: {
      "./SearchBar": "./src/SearchBar.vue",
    },
    shared: ["vue"],
  })
  ],
})
