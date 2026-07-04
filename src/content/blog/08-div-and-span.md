---
title: '网页结构标签：HTML5 语义标签 vs 传统 div 布局'
description: 'HTML5 新增了 header、nav、main 等语义化结构标签，但在这之前网页都是用 div 搭结构的——两种方式都讲清楚。'
pubDate: 2026-07-04
tags: ['HTML', '网页结构', '语义化标签', 'header', 'nav', 'main', 'div']
category: '学习笔记'
order: 8
demo: '/examples/div-span/index.html'
---

## 前言

一个网页通常有页头、导航栏、主要内容区、侧边栏、页脚等区域。怎样用 HTML 把这种结构写出来？

有两种方式：

1. **传统方式** — 全部用 `<div>` 加 class/id 名字来区分
2. **HTML5 语义方式** — 用 `<header>`、`<nav>`、`<main>` 等有含义的标签

这一篇把两种方式都讲清楚，逐个标签说明。

## 一、传统的 div 布局方式

在 HTML5 出现之前（2014 年以前），网页结构全靠 `<div>` 搭出来。

```html
<div id="header">
  <h1>网站标题</h1>
</div>

<div id="nav">
  <a href="#">首页</a>
  <a href="#">关于</a>
  <a href="#">联系</a>
</div>

<div id="main">
  <div class="article">
    <h2>文章标题</h2>
    <p>文章内容...</p>
  </div>
  <div class="sidebar">
    <h3>侧边栏</h3>
    <p>侧边栏内容...</p>
  </div>
</div>

<div id="footer">
  <p>版权信息</p>
</div>
```

所有区域都用 `<div>`，靠 `id` 或 `class` 的名字来区分"这是页头"、"这是导航"。**浏览器并不能理解这些 div 分别代表什么**——只有人看代码时通过 id 名字才能猜出来。

### 这样写的问题

- 代码可读性差 — 满屏都是 `<div>`
- 搜索引擎、屏幕阅读器无法识别页面结构
- 开发时需要自己维护命名规范

## 二、HTML5 语义结构标签

HTML5 引入了一组**语义化结构标签**，每个标签都有明确的含义，让代码"自解释"。

下面是它们的含义和用法，逐个来看：

---

### &lt;header&gt; — 页头

表示页面或某个区块的**头部区域**，通常包含网站 Logo、标题、搜索框等。

```html
<header>
  <h1>我的博客</h1>
  <p>记录学习前端的每一天</p>
</header>
```

**对比传统 div 写法：** `<div id="header">` → `<header>`

---

### &lt;nav&gt; — 导航栏

表示**导航链接**的区域，用于页面内主要的导航菜单。

```html
<nav>
  <ul>
    <li><a href="/">首页</a></li>
    <li><a href="/blog">文章</a></li>
    <li><a href="/about">关于</a></li>
  </ul>
</nav>
```

**对比传统 div 写法：** `<div id="nav">` → `<nav>`

---

### &lt;main&gt; — 主要内容

表示页面的**核心内容**，一个页面只能有一个 `<main>`。

```html
<main>
  <h2>今日要闻</h2>
  <p>这里是页面最重要的内容...</p>
</main>
```

**对比传统 div 写法：** `<div id="main">` → `<main>`

---

### &lt;article&gt; — 独立文章

表示一个**独立、完整的内容单元**，比如一篇博客文章、一条新闻、一个用户评论。

```html
<article>
  <h2>如何学习 HTML</h2>
  <p>HTML 是网页的骨架...</p>
  <footer>发布于 2026-07-04</footer>
</article>
```

---

### &lt;section&gt; — 内容区块

表示一个**主题分组**，通常带标题。和 `<article>` 的区别：`<article>` 是独立完整的单元，`<section>` 是文档中的一个章节。

```html
<section>
  <h2>学习路线</h2>
  <p>第一阶段：HTML + CSS</p>
  <p>第二阶段：JavaScript</p>
</section>
```

---

### &lt;aside&gt; — 侧边栏 / 附属内容

表示与主内容**间接相关**的内容，比如侧边栏、广告、相关文章推荐。

```html
<aside>
  <h3>相关文章</h3>
  <ul>
    <li><a href="#">CSS 入门</a></li>
    <li><a href="#">JavaScript 基础</a></li>
  </ul>
</aside>
```

---

### &lt;footer&gt; — 页脚

表示页面或某个区块的**底部区域**，通常包含版权信息、联系方式等。

```html
<footer>
  <p>© 2026 我的博客 · 保留所有权利</p>
</footer>
```

**对比传统 div 写法：** `<div id="footer">` → `<footer>`

---

## 三、完整结构对比

同样一个页面，用两种方式写出来对比：

### 传统 div 方式

```html
<div id="header">网站标题</div>
<div id="nav">导航链接</div>
<div id="main">
  <div class="article">文章内容</div>
  <div class="sidebar">侧边栏</div>
</div>
<div id="footer">版权信息</div>
```

### HTML5 语义方式

```html
<header>网站标题</header>
<nav>导航链接</nav>
<main>
  <article>文章内容</article>
  <aside>侧边栏</aside>
</main>
<footer>版权信息</footer>
```

功能完全一样，但语义方式的代码**一看就知道每个区域是什么**。

## 四、那 &lt;div&gt; 和 &lt;span&gt; 现在干什么用？

有了语义标签，不代表 `<div>` 和 `<span>` 就没用了。它们的定位变了：

### &lt;div&gt; — 无语义块级容器

适合用来做**纯粹的样式容器**和**布局容器**——比如用 flex 或 grid 排列一组卡片时，需要一个容器来包裹它们，但这里没有合适的语义标签，就用 `<div>`。

```html
<!-- div 做 flex 布局容器 -->
<div style="display: flex; gap: 1rem;">
  <div class="card">卡片 1</div>
  <div class="card">卡片 2</div>
  <div class="card">卡片 3</div>
</div>
```

### &lt;span&gt; — 无语义行内容器

适合用来**修饰部分文字**——给某几个字单独设置颜色、加粗、背景等。

```html
<p>
  今日特价：<span style="color: red; font-weight: bold;">¥99</span>
</p>
```

### 原则

> **页面的大结构用语义标签，样式和布局的细节用 div/span。**

## 我练习的演示页面

我做了一个对比演示页面，展示了传统 div 布局和 HTML5 语义布局的差异，以及 div/span 现在的实际用法。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 标签 | 含义 | 传统写法 |
|------|------|---------|
| `<header>` | 页头 | `<div id="header">` |
| `<nav>` | 导航栏 | `<div id="nav">` |
| `<main>` | 主内容 | `<div id="main">` |
| `<article>` | 独立文章 | `<div class="article">` |
| `<section>` | 内容区块 | `<div class="section">` |
| `<aside>` | 侧边栏 | `<div class="sidebar">` |
| `<footer>` | 页脚 | `<div id="footer">` |
| `<div>` | 无语义块级容器（现用于布局/样式） | — |
| `<span>` | 无语义行内容器（现用于文本修饰） | — |
