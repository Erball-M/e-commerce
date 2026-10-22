import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  transpilePackages: ['@repo/ui'],
  turbopack: {
    rules: {
      '**/general/*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              replaceAttrValues: {
                '#5C5F6A': 'currentColor',
              },
              svgo: false,
            },
          },
        ],
        as: '*.js',
      },
      '**/social/*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
        ],
        as: '*.js',
      },
      '**/colored/*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
            },
          },
        ],
        as: '*.js',
      },
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

export default nextConfig;
