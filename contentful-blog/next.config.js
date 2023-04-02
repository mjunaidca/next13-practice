/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  env: {
    CONTENTFUL_SPACE_ID: "wzah69rk6gx3",
    CONTENTFUL_DELIVERY_API: "IM2vGuJVhCg0cqLz4bnrVCKi5yV2639z83pHdw6-f-4",
  },
};

module.exports = nextConfig;
