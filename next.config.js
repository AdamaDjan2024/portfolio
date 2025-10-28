/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com'],
    unoptimized: false,
  },
  swcMinify: true
};

module.exports = nextConfig;
