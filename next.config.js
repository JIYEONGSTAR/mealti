/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
