---
title: '我的前端之路：从零开始的第一周'
description: '记录我决定转向前端开发的第一周，学了什么、踩了什么坑、做了哪些决定。'
pubDate: 2025-01-15
tags: ['入门', '学习路线', '心得']
category: '学习笔记'
---

## 为什么选择前端？

> "任何足够先进的技术，初看都与魔法无异。" —— Arthur C. Clarke

这是我开始学习前端的第一周。在做了 [之前的工作/专业] 之后，我发现自己最享受的是**创造看得见的东西**——当你写下一段代码，浏览器里立刻能看到效果，这种即时反馈带来的成就感是其他领域难以比拟的。

## 这周我做了什么

### Day 1-2：HTML 与语义化

从最基础的 HTML 开始：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>我的第一个页面</title>
</head>
<body>
  <header>
    <h1>你好，世界！</h1>
  </header>
  <main>
    <p>这是我的第一个 HTML 页面。</p>
  </main>
</body>
</html>
```

**收获：** 理解了语义化标签（`<header>`、`<main>`、`<article>`）的重要性——它们不仅对 SEO 友好，也让代码结构更清晰。

### Day 3-4：CSS 初体验

用 CSS 给页面穿上衣服：

```css
body {
  font-family: system-ui, sans-serif;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}
```

第一次写下 `display: flex` 看到元素对齐的瞬间——**懂了**。

### Day 5：第一个布局挑战

用 Flexbox 和 Grid 做了一个简单的卡片布局。花了一整个下午才把三栏响应式排好，但看到它在手机上自动变成一列的瞬间，一切都值了。

### Day 6-7：JavaScript 小试牛刀

```javascript
const greeting = name => console.log(`Hello, ${name}!`);
greeting('前端世界');
```

从变量声明、函数到 DOM 操作——`document.querySelector` 像是打开了新世界的大门。

## 这周踩的坑

1. **路径问题**：`./` 和 `../` 搞混了，图片加载不出来急了一小时
2. **Flex 对齐**：`align-items` 和 `justify-content` 的方向总是记反
3. **浏览器兼容**：写了个酷炫的 `backdrop-filter`，发现 Firefox 上不生效

## 下周计划

- [ ] 深入学习 CSS 定位和动画
- [ ] 用原生 JS 做一个 To-Do 应用
- [ ] 了解 Git 基础操作

---

第一周结束。路还很长，但已经迈出了第一步。🚀
