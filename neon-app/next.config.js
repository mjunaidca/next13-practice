/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Do not expose your Neon credentials to the browser
  env: {
    PGHOST: "ep-rapid-snow-980340.us-east-2.aws.neon.tech",
    PGDATABASE: "neondb",
    PGUSER: "mr.junaid.ca",
    PGPASSWORD: "gJIo6fn5XCOV",
  },
};

module.exports = nextConfig;
