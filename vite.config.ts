// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig((configEnv) => ({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'family-tree-generator',
      fileName: 'family-tree-generator',
    },
    rollupOptions: {
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          fabric: 'fabric',
        },
      },
    },
  },
  plugins: [dts()],
}));
