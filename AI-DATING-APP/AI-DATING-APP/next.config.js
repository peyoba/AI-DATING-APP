/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 优化生产环境配置
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 图片配置
  images: {
    unoptimized: true,
    domains: ['ai-dating-app-opc9.vercel.app'],
  },
  // 禁用 i18n
  i18n: null,
};

module.exports = nextConfig; 