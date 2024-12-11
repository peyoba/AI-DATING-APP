# AI婚恋契合度预测平台

基于 AI 的智能婚恋关系评估平台，通过科学的模型算法，帮助用户更好地了解和经营感情关系。

## 功能特点

- **智能匹配算法**: 基于多维度数据分析，提供精准的匹配建议
- **个性化测评**: 包含性格测试、价值观评估、兴趣分析等多个维度
- **实时互动**: 支持即时通讯，促进用户间的有效沟通
- **隐私保护**: 采用先进的加密技术，确保用户数据安全

## 技术栈

- **前端框架**: Next.js 13
- **编程语言**: TypeScript
- **样式解决方案**: CSS Modules
- **状态管理**: React Context
- **UI组件**: 自定义组件
- **开发工具**: ESLint, Prettier

## 本地开发

1. **克隆项目**
```bash
git clone https://github.com/peyoba/AI-DATING-APP.git
cd AI-DATING-APP
```

2. **安装依赖**
```bash
npm install
```

3. **环境配置**
```bash
cp .env.example .env.local
# 编辑 .env.local 文件，填入必要的环境变量
```

4. **启动开发服务器**
```bash
npm run dev
```

5. **访问应用**
打开浏览器访问 http://localhost:3000

## 项目结构

```
src/
├── components/     # 可复用组件
├── contexts/      # React Context
├── pages/         # 页面组件
├── services/      # API服务
├── styles/        # 样式文件
└── utils/         # 工具函数
```

## 部署

项目支持多种部署方式：

1. **Vercel（推荐）**
   - Fork 本项目
   - 在 Vercel 中导入项目
   - 配置环境变量
   - 自动部署

2. **传统部署**
```bash
npm run build
npm start
```

## 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情 

GitHub地址 https://github.com/peyoba/AI-DATING-APP
git remote add origin https://github.com/peyoba/AI-DATING-APP
 git add .

 vercel logs https://ai-dating-oa7md5297-peyobas-projects.vercel.app/logs