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
  // 环境变量
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
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
      }
    ];
  },
  // webpack配置
  webpack: (config, { dev, isServer }) => {
    // 优化构建
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    return config;
  },
};

module.exports = nextConfig; 