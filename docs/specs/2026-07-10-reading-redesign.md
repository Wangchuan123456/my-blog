# 博客前端样式翻新 — 经典阅读风

**日期**: 2026-07-10
**状态**: 已批准

---

## 概述

对现有 Astro 博客进行视觉换皮，保持 HTML 结构和 Astro 组件不变，只改动 CSS。目标是：经典阅读风、暖色调、提升阅读体验。

## 配色系统

| CSS 变量 | 亮色模式 | 暗色模式 | 说明 |
|----------|---------|---------|------|
| `--bg` | `#faf8f5` | `#1a1a1a` | 暖白/深灰底色 |
| `--bg-secondary` | `#f5f0eb` | `#252525` | 浅暖灰/次深色 |
| `--text` | `#2d2d2d` | `#e0ddd7` | 柔和黑/暖白文字 |
| `--text-secondary` | `#6b6258` | `#9e9488` | 暖灰次要文字 |
| `--accent` | `#d97706` | `#f59e0b` | 暖橙 accent |
| `--accent-light` | `#fef3c7` | `#2a2418` | 浅橙背景 |
| `--border` | `#e5ddd3` | `#33302b` | 暖灰边框 |
| `--card-shadow` | `0 1px 6px rgba(0,0,0,0.06)` | — | 卡片阴影 |

## 排版系统

- **正文**: `Noto Serif SC` 衬线字体，`line-height: 1.8`
- **标题/UI**: `Inter` 无衬线字体
- **代码**: `JetBrains Mono`（不变）
- **正文最大宽度**: `680px`（最佳阅读字宽）
- **排版模度**: modular scale 1.25

## 组件改动清单

### global.css
- 替换全部 CSS 变量色值
- 新增 `--font-serif` 变量
- body 行高 1.7 → 1.8

### Layout.astro（导航栏 & 页脚）
- 导航栏底部阴影微调
- 链接 hover 效果从透明度 → 颜色变化
- 页脚样式微调

### BlogPost.astro（文章页）
- 标题用衬线字体
- 引用块加粗左边框 + 斜体 + 大一号字
- 代码块加边框 + 微内阴影
- 文章底部导航增加「上一篇/下一篇」
- `.post-content` 内标题间距加大

### index.astro（首页）
- Hero 区配色适配新主色
- 按钮 hover 阴影改为暖橙色
- 卡片样式微调

### blog/index.astro（文章列表）
- 卡片样式统一微调
- 标签筛选按钮适配新配色

### projects/index.astro（项目列表）
- 卡片和标签适配新配色

## 不改动的
- 不新增 npm 依赖
- 不改 HTML 结构
- 不改 content 数据
- 不改 Astro 配置文件
- 不改暗色模式切换逻辑

## 实施顺序
1. global.css — 配色变量 + 基础排版
2. Layout.astro — 导航/页脚样式
3. BlogPost.astro — 文章阅读增强
4. index.astro — 首页适配
5. blog/index.astro — 文章列表适配
6. projects/index.astro — 项目列表适配
7. 构建验证
