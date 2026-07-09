# 博客前端样式翻新 — 经典阅读风 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use `run_skill({name: "subagent-driven-development"})` (recommended) or `run_skill({name: "executing-plans"})` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将博客视觉风格改为经典阅读风：暖白色底、暖橙 accent、Noto Serif SC 衬线正文、精调排版和阅读体验

**Architecture:** CSS-only 改造，不动 HTML 结构/Astro 组件逻辑。核心改动在 global.css（CSS 变量）+ 各组件 `<style>` 块内样式调整

**Tech Stack:** Astro + CSS 变量 + 组件级 scoped style

**设计文档:** `docs/specs/2026-07-10-reading-redesign.md`

---

### Task 1: global.css — 配色变量 + 基础排版

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: 替换 CSS 变量色值**

将 `:root` 和 `html.dark` 中的全部 CSS 变量替换为新配色：

```css
:root {
  --bg: #faf8f5;
  --bg-secondary: #f5f0eb;
  --text: #2d2d2d;
  --text-secondary: #6b6258;
  --accent: #d97706;
  --accent-light: #fef3c7;
  --border: #e5ddd3;
  --card-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
  --radius: 12px;
  --max-width: 720px;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-serif: 'Noto Serif SC', 'Source Han Serif SC', 'STSong', 'Georgia', serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}

html.dark {
  --bg: #1a1a1a;
  --bg-secondary: #252525;
  --text: #e0ddd7;
  --text-secondary: #9e9488;
  --accent: #f59e0b;
  --accent-light: #2a2418;
  --border: #33302b;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
```

- [ ] **Step 2: 更新 body 行高**

```css
body {
  line-height: 1.8;   /* 从 1.7 → 1.8 */
  font-family: var(--font-serif);  /* 正文使用衬线 */
}
```

注意：正文改衬线后，UI 元素（导航、按钮、卡片标题）需要单独指定 `--font-sans`，后续任务会处理。

- [ ] **Step 3: 微调代码块**

```css
pre {
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);
}
```

- [ ] **Step 4: 构建验证**

Run: `cd my-blog && npm run build`
Expected: 构建成功，无错误

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css
git commit -m "style: 换肤 — 暖白底色 + 暖橙 accent + 衬线正文 + 行高优化"
```

---

### Task 2: Layout.astro — 导航栏 & 页脚适配

**Files:**
- Modify: `src/layouts/Layout.astro`

- [ ] **Step 1: 导航栏样式微调**

在 `<style>` 中修改导航栏和链接样式：

```css
/* 导航栏链接 hover 效果增强 */
.nav-links a {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 2px;
  transition: color 0.2s;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.2s;
}
.nav-links a:hover {
  color: var(--accent);
}
.nav-links a:hover::after {
  width: 100%;
}
```

将 logo 字体改为衬线：

```css
.logo {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text);
}
```

- [ ] **Step 2: 构建验证**

Run: `cd my-blog && npm run build`
Expected: 构建成功

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "style: 导航栏 hover 下划线动效 + logo 衬线字体"
```

---

### Task 3: BlogPost.astro — 文章阅读增强（核心）

**Files:**
- Modify: `src/layouts/BlogPost.astro`

- [ ] **Step 1: 文章标题用衬线 + 加大间距**

```css
.post-title {
  font-family: var(--font-serif);
  font-size: 2.2rem;      /* 从 2rem → 2.2rem */
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 0.8rem;
}
```

- [ ] **Step 2: 文章内容标题间距加大**

```css
.post-content h2 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin: 2.5rem 0 0.8rem;  /* 上间距 2rem → 2.5rem */
}
.post-content h3 {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  margin: 2rem 0 0.6rem;    /* 上间距 1.5rem → 2rem */
}
```

- [ ] **Step 3: 引用块升级**

```css
.post-content blockquote {
  border-left: 4px solid var(--accent);
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  background: var(--bg-secondary);
  border-radius: 0 var(--radius) var(--radius) 0;
  color: var(--text-secondary);
  font-style: italic;
  font-size: 1.05rem;
}
```

- [ ] **Step 4: 段落间距加大**

```css
.post-content p {
  margin-bottom: 1.5rem;   /* 从 1.2rem → 1.5rem */
}
```

- [ ] **Step 5: 文章正文最大宽度收窄**

```css
.post {
  max-width: 680px;          /* 从 720px → 680px */
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
}
```

- [ ] **Step 6: 构建验证**

Run: `cd my-blog && npm run build`
Expected: 构建成功

- [ ] **Step 7: Commit**

```bash
git add src/layouts/BlogPost.astro
git commit -m "style: 文章页阅读增强 — 衬线标题 + 加大间距 + 引用块升级 + 最佳字宽"
```

---

### Task 4: index.astro — 首页适配

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Hero 区装饰文字改衬线**

```css
.hero-greeting {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
```

- [ ] **Step 2: 按钮 hover 阴影色适配暖橙**

```css
.btn-primary:hover {
  box-shadow: 0 4px 14px rgba(217, 119, 6, 0.3);  /* 紫色 → 暖橙 */
}
```

- [ ] **Step 3: 卡片样式微调**

```css
.card {
  border-radius: 10px;       /* 12px → 10px */
  transition: box-shadow 0.25s, transform 0.25s;  /* 0.2s → 0.25s */
}
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}
```

- [ ] **Step 4: 构建验证**

Run: `cd my-blog && npm run build`
Expected: 构建成功

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "style: 首页适配 — Hero 衬线 + 按钮暖橙阴影 + 卡片微调"
```

---

### Task 5: blog/index.astro — 文章列表适配

**Files:**
- Modify: `src/pages/blog/[...slug].astro` （注意：文章列表是 `src/pages/blog/index.astro`）

- [ ] **Step 1: 文章卡片样式统一微调**

```css
.blog-card {
  border-radius: 10px;
  transition: box-shadow 0.25s, transform 0.25s;
}
.blog-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}
```

- [ ] **Step 2: 标签筛选按钮适配暖橙**

```css
.filter-tag.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}
```

- [ ] **Step 3: 构建验证**

Run: `cd my-blog && npm run build`
Expected: 构建成功

- [ ] **Step 4: Commit**

```bash
git add src/pages/blog/index.astro
git commit -m "style: 文章列表适配 — 卡片微调 + 标签筛选暖橙色"
```

---

### Task 6: projects/index.astro — 项目列表适配

**Files:**
- Modify: `src/pages/projects/index.astro`

- [ ] **Step 1: 项目卡片样式统一微调**

```css
.project-card {
  border-radius: 10px;
  transition: box-shadow 0.25s, transform 0.25s;
}
.project-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}
```

- [ ] **Step 2: 构建验证**

Run: `cd my-blog && npm run build`
Expected: 构建成功

- [ ] **Step 3: Commit**

```bash
git add src/pages/projects/index.astro
git commit -m "style: 项目列表适配 — 卡片微调"
```

---

### Task 7: BlogPost.astro + [...slug].astro — 上一篇/下一篇导航

**Files:**
- Modify: `src/layouts/BlogPost.astro`
- Modify: `src/pages/blog/[...slug].astro`

- [ ] **Step 1: 更新 BlogPost.astro Props 接收 prev/next**

在 BlogPost.astro 的 frontmatter 中，添加 prev/next 参数：

```astro
---
export interface Props {
  entry: CollectionEntry<'blog'>;
  prev?: CollectionEntry<'blog'>;
  next?: CollectionEntry<'blog'>;
}
const { entry, prev, next } = Astro.props;
---
```

- [ ] **Step 2: 替换文章底部导航 HTML**

将原有 `.post-footer` 中的 `back-link` 替换为上一篇/下一篇导航：

```astro
    <!-- 文章底部导航 -->
    <nav class="post-footer">
      <div class="post-nav-inner">
        {prev && (
          <a href={`/blog/${prev.id}`} class="post-nav-link prev">
            <span class="post-nav-label">← 上一篇</span>
            <span class="post-nav-title">{prev.data.title}</span>
          </a>
        )}
        {next && (
          <a href={`/blog/${next.id}`} class="post-nav-link next">
            <span class="post-nav-label">下一篇 →</span>
            <span class="post-nav-title">{next.data.title}</span>
          </a>
        )}
      </div>
    </nav>
```

- [ ] **Step 3: 添加导航样式**

```css
  .post-nav-inner {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .post-nav-link {
    flex: 1;
    display: block;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    transition: background 0.2s;
  }
  .post-nav-link.next {
    text-align: right;
  }
  .post-nav-link:hover {
    background: var(--bg-secondary);
  }
  .post-nav-label {
    display: block;
    font-size: 0.82rem;
    color: var(--text-secondary);
    font-family: var(--font-sans);
    margin-bottom: 0.2rem;
  }
  .post-nav-title {
    display: block;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text);
    font-family: var(--font-serif);
    line-height: 1.4;
  }
  .post-nav-link:only-child.next {
    margin-left: auto;
  }
```

- [ ] **Step 4: 更新 [...slug].astro 传入 prev/next**

修改 `src/pages/blog/[...slug].astro` 的 frontmatter，获取前后文章并传入 BlogPost：

```astro
---
import BlogPost from '../../layouts/BlogPost.astro';
import { getCollection } from 'astro:content';

const blogPosts = await getCollection('blog');
const sorted = blogPosts.sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));

const { slug } = Astro.params;
const entry = sorted.find(p => p.id === slug);
if (!entry) return Astro.redirect('/404');

const idx = sorted.indexOf(entry);
const prev = idx > 0 ? sorted[idx - 1] : undefined;
const next = idx < sorted.length - 1 ? sorted[idx + 1] : undefined;
---

<BlogPost entry={entry} prev={prev} next={next} />
```

- [ ] **Step 5: 构建验证**

Run: `cd my-blog && npm run build`
Expected: 构建成功

- [ ] **Step 6: Commit**

```bash
git add src/layouts/BlogPost.astro src/pages/blog/\[...slug\].astro
git commit -m "feat: 文章底部添加上一篇/下一篇导航"
```

---

### Task 8: 整体构建与最终确认

**Files:** （无代码改动）

- [ ] **Step 1: 全量构建**

Run: `cd my-blog && npm run build`
Expected: 构建成功，无错误/警告

- [ ] **Step 2: 启动 dev server 快速预览**

Run: `cd my-blog && npm run dev`
Expected: 本地启动成功，访问各页面确认样式生效

- [ ] **Step 3: Commit 剩余改动**

```bash
git add .
git commit -m "chore: 全量构建验证"
```
