import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true, // Use false during development if needed
      },
    ];
  },
};

export default nextConfig;
