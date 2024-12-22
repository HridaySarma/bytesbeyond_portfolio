/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['i.imgur.com'],
  },
  output: 'export',
}

module.exports = nextConfig
