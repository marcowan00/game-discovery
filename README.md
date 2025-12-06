# Game Discovery | 游戏发现

[English](#english-version) | [中文](#chinese-version)

---

<a id="english-version"></a>

## 1. Project Intro

A lightweight game discovery platform supporting game browsing and searching. You can also manage your favorite games. Built with React and TypeScript. Game data provided by [RAWG.io](https://rawg.io/).

## 2. Features

- **Game Browsing**: Display popular/latest games with infinite loading
- **Category Filter**: Filter games by genre (Action/RPG/...) or platform (PC/Console/Mobile)
- **Keyword Search**: Quickly find your target games
- **Favorites Management**: Save your favorite games with persistent storage
- **Responsive Design**: Compatible with PC/mobile devices

## 3. Built with

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Chakra UI
- **State Management**: Zustand
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Data Fetching**: TanStack Query (React Query)

## 4. Online Preview

Deployed to Vercel: [https://game-discovery-mw.vercel.app/](https://game-discovery-mw.vercel.app/)

## 5. Local Deployment

1. Clone the repository

```bash
git clone https://github.com/marcowan00/game-discovery.git
cd game-discovery
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your RAWG API key

```env
VITE_RAWG_API_KEY: "your_rawg_api_key"
```

You can get a free API key from [RAWG API](https://rawg.io/apidocs).

4. Start the development server

```bash
npm run dev
```

## 6. Key Technical Highlights

- Developed with TypeScript and modular architecture, encapsulating generic API Client and custom Hooks to enhance code reusability and maintainability
- Built consistent UI with Chakra UI component library, implementing responsive layouts, dark mode toggle, and skeleton loading for optimized user experience
- Integrated React Query for data layer encapsulation, configured cache strategy to reduce redundant API calls
- Utilized Zustand for lightweight global state management, featuring debounced search, category filtering, and localStorage-based favorites persistence
- Implemented infinite scroll to load paginated game data on demand, providing smooth browsing experience
- Optimized performance through image lazy loading and route-based code splitting to minimize initial load time
- Deployed to Vercel production environment with proper SPA routing configuration and GitHub integration for automated deployment

## 7. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<a id="chinese-version"></a>

## 1. 项目简介

一款轻量级游戏发现平台，支持游戏浏览、搜索，收藏你喜欢的游戏。基于 React 和 TypeScript 开发。游戏数据由 [RAWG.io](https://rawg.io/) 提供。

## 2. 主要功能

- **游戏浏览**：展示热门/最新游戏，支持无限加载
- **分类筛选**：以游戏类型（动作/RPG/...）或平台（PC/游戏机/移动端）筛选游戏
- **关键词搜索**：快速查找目标游戏
- **收藏管理**：保存你喜欢的游戏至浏览器存储中
- **响应式设计**：适配 PC/移动端

## 3. 技术栈

- **框架**: React 18, TypeScript
- **构建工具**: Vite
- **样式组件库**: Chakra UI
- **状态管理**: Zustand
- **路由管理**: React Router v6
- **HTTP 客户端**: Axios
- **数据获取**: TanStack Query (React Query)

## 4. 在线预览

项目已部署至 Vercel：[https://game-discovery-mw.vercel.app/](https://game-discovery-mw.vercel.app/)

## 5. 本地运行

1. 克隆仓库

```bash
git clone https://github.com/marcowan00/game-discovery.git
cd game-discovery
```

2. 安装依赖

```bash
npm install
```

3. 在根目录创建 `.env` 文件并添加你的 RAWG API Key

```env
VITE_RAWG_API_KEY: "你的API Key"
```

你可以从 [RAWG API](https://rawg.io/apidocs) 免费获取 API Key。

4. 启动开发服务器

```bash
npm run dev
```

## 6. 项目亮点

- 基于 TypeScript 开发，采用模块化架构，封装泛型 API Client 与自定义 Hooks，提升代码复用率和可维护性
- 基于 Chakra UI 组件库构建一致性 UI，实现响应式布局、深色模式切换、骨架屏加载等用户体验优化
- 集成 React Query 实现数据请求层封装，配置缓存策略减少无效 API 调用
- 采用 Zustand 进行轻量级全局状态管理，实现防抖搜索、分类筛选，结合 localStorage 本地持久化完成游戏收藏功能
- 实现无限滚动加载逻辑，按需加载分页游戏数据，优化用户浏览流畅度
- 应用图片懒加载和路由级代码分割，减少首屏资源请求，提升页面加载速度
- 完成项目生产环境部署（Vercel），适配 SPA 路由特性，关联 GitHub 实现自动部署

## 7. 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。
