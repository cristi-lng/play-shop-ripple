import { defineConfig } from 'vite';
import path from 'path';
import { ripple } from '@ripple-ts/vite-plugin';

export default defineConfig({
  root: 'src',
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve('src') },
      { find: 'ripple-router', replacement: path.resolve('ripple-router') },
      { find: /~(.*)/, replacement: path.join(path.resolve('src/features/'), '$1') },
    ],
  },
  publicDir: 'assets/public',
  envDir: process.cwd(),
  plugins: [ripple()],
  build: {
    outDir: `${process.cwd()}/dist`,
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
