# Fitness Love

> 一款运动健身应用，帮助您在短时间内达到理想的健身效果

## 项目简介

Fitness Love 是一款基于 Vue 2 的移动端健身应用，提供以下功能：

- 📝 **日记功能** - 记录每日运动、饮食和饮水情况
- 🏃 **运动追踪** - 自动追踪运动数据
- 📊 **数据分析** - 可视化展示健康数据
- 🥗 **营养管理** - 记录和分析饮食营养

## 技术栈

- **前端框架**: Vue 2.7
- **路由管理**: Vue Router 3.x
- **数据可视化**: @antv/f2
- **UI组件**: vue-awesome-swiper
- **数据存储**: IndexedDB
- **构建工具**: Webpack 3

## 项目结构

```
fitness-love/
├── build/          # Webpack 构建配置
├── config/         # 项目配置文件
├── src/
│   ├── assets/     # 静态资源（图片、样式、JS工具）
│   ├── components/ # 公共组件
│   ├── page/       # 页面组件
│   ├── router/     # 路由配置
│   ├── App.vue     # 根组件
│   └── main.js     # 入口文件
├── static/         # 静态文件
└── index.html      # HTML模板
```

## 快速开始

### 环境要求

- Node.js >= 12.0.0
- npm >= 6.0.0

### 安装依赖

```bash
npm install --legacy-peer-deps
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:8080 查看应用

### 生产构建

```bash
npm run build
```

## 主要页面

| 页面 | 路径 | 描述 |
|------|------|------|
| 启动页 | /startIndex | 应用引导页 |
| 登录 | /login | 用户登录 |
| 注册 | /register | 用户注册 |
| 日记主页 | / | 每日记录概览 |
| 运动 | /exeIndex | 运动记录 |
| 训练 | /workIndex | 训练计划 |
| 更多 | /moreIndex | 更多功能 |

## 更新日志

### 2026-05-13
- 更新 Vue 至 2.7.16
- 更新 vue-router 至 3.6.5
- 优化 DB.js 数据库操作（Promise 化）
- 优化路由配置代码结构
- 优化 App.vue 认证逻辑
- 改进代码注释和文档

## License

MIT
