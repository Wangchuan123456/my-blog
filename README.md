# 📖 前端日志 — 个人学习博客

记录前端学习过程的个人博客，用 [Astro](https://astro.build) 构建，内容用 Markdown 管理，部署在 [Vercel](https://vercel.com)。

**线上地址：** https://my-blog-psi-mauve.vercel.app/

## 这个博客是干什么的？

这是一个**求职辅助型学习博客**，记录我从零开始学习前端的全过程：

- 📝 **学习笔记** — 每学一个知识点就写一篇文章，既巩固知识，也展示学习轨迹
- 🚀 **项目展示** — 学习过程中做的练习和项目，附在线演示
- 💡 **面试准备** — 后期的面试题整理和心得

目的是向未来的雇主证明：我有**持续学习的热情**和**交付项目的能力**。

## 项目结构

```
my-blog/
├── src/
│   ├── content/
│   │   ├── config.ts          # 内容类型定义（Zod Schema）
│   │   ├── blog/              # 📝 学习笔记（Markdown 文件）
│   │   └── projects/          # 🚀 项目展示（Markdown 文件）
│   ├── layouts/
│   │   ├── Layout.astro       # 全局布局（导航栏、页脚、暗色模式）
│   │   └── BlogPost.astro     # 文章详情页模板
│   ├── pages/
│   │   ├── index.astro        # 首页（最新文章 + 精选项目）
│   │   ├── 404.astro          # 404 页面
│   │   ├── blog/
│   │   │   ├── index.astro    # 文章列表页
│   │   │   └── [...slug].astro # 文章详情路由
│   │   ├── projects/
│   │   │   ├── index.astro    # 项目列表页
│   │   │   └── [...slug].astro # 项目详情路由
│   │   └── rss.xml.astro      # RSS 订阅
│   └── styles/
│       └── global.css         # 全局样式 + CSS 变量主题
├── public/
│   └── examples/              # 🗂️ HTML 练习文件（在线演示用）
│       ├── html-basics.html
│       ├── text-tags.html
│       ├── test.html
│       ├── 图片标签的基本使用.html
│       ├── paths-demo/
│       ├── 音视频标签/
│       └── 超链接/
└── astro.config.mjs
```

## 📂 HTML 练习文件在哪？

所有 HTML 练习文件放在 `public/examples/` 目录下，按知识点分文件夹存放：

| 对应文章 | 路径 |
|---------|------|
| ① HTML 入门 | `public/examples/html-basics.html` | `C:\Users\gly\Desktop\前端学习\Html5\代码1\` |
| ② 文本格式化标签 | `public/examples/text-tags.html` | 同上 |
| ③ 块级 vs 行内 | `public/examples/test.html` | 同上 |
| ④ 图片标签 | `public/examples/图片标签的基本使用.html` | 同上 |
| ⑤ 路径详解 | `public/examples/paths-demo/index.html` | 无独立练习文件 |
| ⑥ 音视频标签 | `public/examples/音视频标签/index.html` | 同上 |
| ⑦ 超链接 | `public/examples/超链接/index.html` | 无独立练习文件 |

这些文件部署后可以通过 `https://my-blog-psi-mauve.vercel.app/examples/xxx` 直接访问。

## 🔢 文章排序规则

博客有两套排序，各自独立：

### 首页「最新文章」— 倒序（最新在前）

**位置：** `src/pages/index.astro`

```js
const recentPosts = blogPosts.sort(
  (a, b) => (b.data.order ?? 0) - (a.data.order ?? 0)
).slice(0, 5);
```

**规则：** 按 `order` 字段**从大到小**排列，取前 5 篇。

**效果：** 最新学的知识排最前面，让访客（面试官）第一眼看到你最新的学习进度。

```
首页显示顺序：⑦ ⑥ ⑤ ④ ③
```

### 文章列表页 — 正序（先学的在前面）

**位置：** `src/pages/blog/index.astro`

```js
const sortedPosts = blogPosts.sort(
  (a, b) => (a.data.order ?? 999) - (b.data.order ?? 999)
);
```

**规则：** 按 `order` 字段**从小到大**排列。

**效果：** 展示完整的学习路径，从第一个知识点开始，循序渐进。

```
文章列表顺序：① ② ③ ④ ⑤ ⑥ ⑦
```

### `order` 字段说明

每篇文章的 frontmatter 里都有一个 `order` 字段：

```yaml
---
title: '文章标题'
order: 7          # ← 这个值决定了排序位置
demo: '/examples/xxx.html'
---
```

- `order` 值越小越**先学**（在文章列表排前面）
- `order` 值越大越**新学**（在首页排前面）
- 新文章按学习顺序递增即可

## 🚀 日常操作

```bash
# 本地预览
npm run dev

# 构建
npm run build

# 写新文章
# 1. 在 src/content/blog/ 下新建 .md 文件，填好 frontmatter
# 2. 可选：把练习 HTML 文件放入 public/examples/
# 3. 提交推送，Vercel 自动部署
git add .
git commit -m "新文章：xxx"
git push
```

## 🛠 技术栈

- **框架：** Astro 5
- **内容管理：** Content Collections（Markdown + Zod Schema）
- **样式：** CSS 变量 + 内联 scoped CSS
- **部署：** Vercel（自动部署）
- **代码托管：** GitHub
