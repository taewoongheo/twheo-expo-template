import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: 'nativewind',
    }),
  ],
  resolve: {
    alias: [
      {
        find: 'react-native/Libraries/Utilities/codegenNativeComponent',
        replacement: path.resolve(__dirname, './src/shim.js'),
      },
      {
        find: 'react-native',
        replacement: 'react-native-web',
      },
    ],
    dedupe: ['react', 'react-dom', 'react-native-web'],
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.json',
    ],
  },
});
