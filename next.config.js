/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_SUPABASE_URL}`],
  },
};

module.exports = nextConfig;
