/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 优化生产环境配置
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 静态导出配置
  output: 'export',
  // 图片配置
  images: {
    unoptimized: true,
  },
  // 禁用 i18n
  i18n: null,
};

module.exports = nextConfig; 