// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    // Always proxy /api/* to the Django service inside docker-compose.
    // This avoids accidental localhost resolution inside the Next container.
    return [
      {
        source: "/api/:path*",
        destination: "http://backend:8000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
