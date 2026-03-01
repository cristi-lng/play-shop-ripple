import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ripple } from '@ripple-ts/vite-plugin';

export default defineConfig({
  root: 'src',
  publicDir: 'assets/public',
  envDir: process.cwd(),
  plugins: [tsconfigPaths(), ripple()],
  build: {
    outDir: `${process.cwd()}/dist`,
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
