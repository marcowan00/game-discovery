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
VITE_RAWG_API_KEY=your_api_key_here
```

You can get a free API key from [RAWG API](https://rawg.io/apidocs).

4. Start the development server

```bash
npm run dev
```

## 6. Key Technical Highlights

TBD

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
VITE_RAWG_API_KEY=你的API Key
```

你可以从 [RAWG API](https://rawg.io/apidocs) 免费获取 API Key。

4. 启动开发服务器

```bash
npm run dev
```

## 6. 项目亮点

<!-- TODO 性能优化 -->
<!-- TODO 添加许可证 -->
<!-- TODO 写项目亮点（同步写英文版） -->

- 图片懒加载，移动端首页加载时间降低 40%
- 路由懒加载
