import type { NextConfig } from "next";
//bump
const nextConfig: NextConfig = {
  experimental: {
    ppr: false,
    cacheComponents: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
