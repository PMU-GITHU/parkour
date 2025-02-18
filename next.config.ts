import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '64.media.tumblr.com',
      
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      
      }
    ],
  },
};

export default nextConfig;
