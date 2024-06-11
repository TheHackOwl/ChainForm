/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals.push('node-datachannel/polyfill');
    return config;
  }
}

module.exports = nextConfig