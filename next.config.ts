import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': path.resolve('./node_modules/framer-motion/dist/cjs/index.js'),
    };
    return config;
  },
};

export default nextConfig;
