/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  excludeFile: str => /\*.[stories|test].tsx/.test(str),
};

module.exports = nextConfig;
