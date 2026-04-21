/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/application',
  assetPrefix: '/application/',
  trailingSlash: true,
};

module.exports = nextConfig;
