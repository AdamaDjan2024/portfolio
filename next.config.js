/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  output: 'standalone',
  images: {
    domains: ['localhost'],
  },
  async headers() {
    return [
      {
        source: '/cv.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
