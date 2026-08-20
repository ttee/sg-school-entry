/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/小学', destination: '/primary', permanent: false },
      { source: '/中学', destination: '/secondary', permanent: false },
    ]
  },
}

module.exports = nextConfig
