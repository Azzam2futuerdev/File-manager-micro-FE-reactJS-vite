import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'foldres_mfe',
      filename: 'remoteEntry.js',
      remotes: {
        HostApp: "http://localhost:5001/assets/remoteEntry.js",
        Shared: "http://localhost:5007/assets/remoteEntry.js",
        Files_MFE: "http://localhost:5003/assets/remoteEntry.js"
      },
      exposes: {
        './FoldersList': './src/Components/FolderComponent/FoldersList',
        './CreateFolder': './src/Components/FolderComponent/CreateFolder',
        './actions': './src/Actions/actionCreators/ExportAction',
      },
      shared: ["react","react-dom","react-router-dom","redux","react-redux","redux-devtools-extension","redux-thunk","react-toastify"]
  })],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
