---
title: '个人博客（就是这个站点！）'
description: '用 Astro 构建的个人博客，Markdown 内容管理，一键部署到 Vercel。'
pubDate: 2025-03-01
repo: 'https://github.com/yourusername/my-blog'
demo: 'https://your-blog.vercel.app'
techStack: ['Astro', 'MDX', 'CSS3', 'Vercel']
featured: true
---

## 项目简介

你现在正在看的这个博客就是用 Astro 搭建的。选择 Astro 的原因：

- **零 JS 默认输出**：页面加载极快
- **Content Collections**：基于 Markdown 的内容管理，类型安全
- **Islands 架构**：需要交互的地方才加 JS

## 技术亮点

1. **Content Collections + Zod Schema**：每篇文章自动校验 frontmatter
2. **动态标签筛选**：纯前端实现，按标签过滤文章列表
3. **暗色模式**：CSS 变量 + localStorage 持久化
4. **RSS 订阅**：自动生成 `/rss.xml`

## 部署流程

```bash
# 本地开发
npm run dev

# 构建
npm run build

# 部署：push 到 GitHub，Vercel 自动部署
```
