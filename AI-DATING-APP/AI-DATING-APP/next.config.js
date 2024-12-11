/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  distDir: '.next',
  // 优化构建
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // 图片优化
  images: {
    domains: ['ai-dating-app-opc9.vercel.app'],
    unoptimized: true,
  },
  // 输出优化
  output: 'standalone',
  compress: true,
  // 路由配置
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/:path*',
        destination: '/',
      }
    ];
  },
  // 处理 404
  async redirects() {
    return [
      {
        source: '/404',
        destination: '/',
        permanent: false,
      }
    ];
  },
  experimental: {
    esmExternals: 'loose'
  }
};

module.exports = nextConfig; 