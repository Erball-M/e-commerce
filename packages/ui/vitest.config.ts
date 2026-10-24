import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const svgMockPath = fileURLToPath(
  new URL('./test/svgMock.tsx', import.meta.url),
);

export default defineConfig({
  plugins: [
    {
      name: 'svg-mock',
      enforce: 'pre',
      resolveId(source) {
        return source.endsWith('.svg') ? svgMockPath : undefined;
      },
    },
    react(),
  ],
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.tsx'],
    setupFiles: ['./vitest.setup.ts'],
  },
});
