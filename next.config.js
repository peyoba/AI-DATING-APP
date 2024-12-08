/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    // 如果使用外部图片服务，需要在这里添加域名
  },
  // 如果需要支持其他语言，可以添加i18n配置
  i18n: {
    locales: ['zh'],
    defaultLocale: 'zh',
  },
};

module.exports = nextConfig; 