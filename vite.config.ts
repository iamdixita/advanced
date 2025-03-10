// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

///
// <reference types="node" />

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Define Vite configuration
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), ""); // No more TS error

  console.log(`App Name: ${env.VITE_APP_NAME}`);
  console.log(`API URL: ${env.VITE_API_URL}`);

  return {
    plugins: [react()],
    define: {
      __APP_NAME__: JSON.stringify(env.VITE_APP_NAME),
      __API_URL__: JSON.stringify(env.VITE_API_URL),
    },
  };
});
