/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/curriculum/mocks/b1-mock', destination: '/curriculum/mocks/p45-mock', permanent: true },
    ]
  },
  async rewrites() {
    return [
      { source: '/小学', destination: '/primary' },
      { source: '/中学', destination: '/secondary' },
      { source: '/%E5%B0%8F%E5%AD%A6', destination: '/primary' },
      { source: '/%E4%B8%AD%E5%AD%A6', destination: '/secondary' },
    ]
  },
}

module.exports = nextConfig
