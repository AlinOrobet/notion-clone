/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["files.edgestore.dev"],
  },
};

module.exports = nextConfig;
