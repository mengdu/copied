import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, 'example'),
  plugins: [dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'copied',
      fileName: (format) => `index.${format}.js`,
    }
  }
})
