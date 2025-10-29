/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
  images: {
    domains: ["vercel.com"],
    unoptimized: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
=======
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true
>>>>>>> 6466b2e07bf75485326f2b10c988bc6a7c649937
};

module.exports = nextConfig;
