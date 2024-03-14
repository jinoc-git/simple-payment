/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/checkout',
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
