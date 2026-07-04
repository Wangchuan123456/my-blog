---
title: '第一个 HTML 页面'
description: '跟着黑马教程写的第一个 HTML 页面，练习了文档结构、标题段落、文本格式化标签和实体字符。'
pubDate: 2025-03-01
techStack: ['HTML5']
featured: true
---

## 项目简介

这是我学完 HTML 基础后写的第一个页面。虽然只是纯 HTML、没有任何样式，但它标志着我**从零到一**的跨越。

## 用到的知识点

1. **文档结构**：`<!DOCTYPE html>`、`<html>`、`<head>`、`<body>`
2. **标题层级**：`<h1>` ~ `<h6>` 的正确使用
3. **段落与文本**：`<p>`、`<strong>`、`<em>`、`<del>`、`<ins>`
4. **特殊符号**：`&lt;`、`&gt;`、`&amp;`、`&copy;`
5. **语义化思想**：用合适的标签表达内容的含义

## 代码展示

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>我的第一个页面</title>
</head>
<body>
  <h1>📖 前端学习日志</h1>
  <h2>第一天：HTML 基础</h2>
  <p>今天我学习了 <strong>HTML 文档结构</strong>、<em>标签关系</em>、标题段落、文本格式化标签。</p>
  <hr />
  <p>特殊字符练习：&lt;div&gt; 是块级标签</p>
  <p>&copy; 2025 持续学习中</p>
</body>
</html>
```

## 学到的东西

- 明白了 HTML 是"骨架"的概念
- 养成了写语义化标签的习惯
- 理清了标签之间的并列和包含关系

## 下一步

- [ ] 学完图片和链接标签后更新页面
- [ ] 开始学 CSS，给页面加上样式
