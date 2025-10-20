// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The presence of the `webpack` function is enough to opt out of Turbopack
  // for the `next build` command and use Webpack instead.
  webpack: (config, { isServer }) => {
    // You can add custom webpack configurations here if needed in the future.
    return config;
  },
};

export default nextConfig;