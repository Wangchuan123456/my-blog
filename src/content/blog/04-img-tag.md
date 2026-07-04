---
title: '图片标签 &lt;img&gt; 与常见图片格式：有图有真相'
description: '学习 img 标签的 src、alt、width、height、title 属性，以及 JPG/PNG/GIF/WebP/AVIF 的区别。'
pubDate: 2026-07-03
tags: ['HTML', '图片标签', 'img', '图片格式']
category: '学习笔记'
order: 4
demo: '/examples/图片标签的基本使用.html'
---

## 前言

学完文字和布局相关的标签，下一步就是让页面"有图有真相"。这节学了 `<img>` 标签和常见的图片格式。

## img 标签的基本用法

```html
<img src="1.jpg" alt="图片1">
```

`<img>` 是一个**自闭合标签**（不需要结束标签 `</img>`），也是**行内替换元素**——它像行内元素一样不换行，但可以设置宽高。

它有两个**必填属性**：

| 属性 | 作用 |
|------|------|
| `src` | 图片的路径（来源） |
| `alt` | 图片加载失败时的替代文本 |

> **老师强调：** `alt` 不只是为了"图片坏了显示文字"，更重要的是**无障碍访问**——屏幕朗读器会读出 `alt` 内容，让视障用户也能理解图片的含义。

## 设置图片尺寸

```html
<!-- 只修改宽度，高度自动等比缩放（推荐） -->
<img src="1.jpg" alt="图片1" width="200">

<!-- 同时设置宽高，可能会变形 -->
<img src="1.jpg" alt="图片1" width="200" height="200">
```

**技巧：** 一般情况下只改 `width` 或 `height` 中的一个，另一个会自动等比缩放。如果两个都设，比例不一致的话图片会被拉伸。

## title 属性：鼠标悬停提示

```html
<img src="1.jpg" alt="图片1" title="图片1">
```

`title` 属性不是图片特有的，很多 HTML 标签都支持。效果是**鼠标悬停在图片上时**会显示一段提示文字。

## 常见图片格式对比

老师用同一种图片的不同格式演示，我整理了一张对比表：

| 格式 | 扩展名 | 特点 | 适用场景 |
|------|--------|------|---------|
| **JPEG** | `.jpg` / `.jpeg` | 色彩丰富、文件小 | 照片、复杂色彩图片 |
| **PNG** | `.png` | 支持透明背景、无损 | Logo、图标、截图 |
| **GIF** | `.gif` | 支持动图、最多256色 | 简单动画、表情包 |
| **WebP** | `.webp` | Google 出品，比 JPG 更小 | 现代网站首选 |
| **AVIF** | `.avif` | 最新格式，压缩率最高 | 未来趋势 |

HTML 里插入不同格式的图片：

```html
<img src="1.jpg" alt="JPG图片" title="JPG格式" width="200">
<img src="1.png" alt="PNG图片" title="PNG格式">
<img src="1.gif" alt="GIF动图" title="GIF格式">
<img src="1.webp" alt="WebP图片" title="WebP格式">
<img src="1.avif" alt="AVIF图片" title="AVIF格式">
```

浏览器会自动识别格式并显示——只要能打开，它就显示；打不开就显示 `alt` 文字。

## 路径问题又踩坑了

这次写练习的时候又遇到路径问题：我把图片放在和 HTML 同级的目录，用 `src="1.jpg"` 就能直接引用。

但如果图片在上一级目录或其他文件夹，就要用：

```html
<!-- 上一级目录 -->
<img src="../images/1.jpg" alt="图片">

<!-- 子目录 -->
<img src="assets/1.jpg" alt="图片">
```

> 路径原则和之前学的一样：`./` 当前目录、`../` 上一级目录。多练习几次就记住了。

## 我练习的代码

这是我写的完整例子，插入了不同格式的图片并设置了不同的属性。你可以点击文章标题下方的「🌐 在线演示」按钮查看实际效果。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>图片标签的基本使用</title>
</head>

<body>
  <h2>图片标签的基本使用</h2>
  <img src="1.jpg" alt="图片1">

  <h2>图片标签的基本属性</h2>
  <img src="1.jpg" alt="图片1" width="200">
  <img src="1.jpg" alt="图片1" width="200" height="200">

  <h2>图片标签添加title属性</h2>
  <img src="1.jpg" alt="图片1" title="图片1">

  <h2>插入不同格式图片</h2>
  <img src="1.jpg" alt="图片1" title="图片1" width="200">
  <img src="login.png" alt="图片2" title="图片2">
  <img src="1.gif" alt="图片3" title="图片3">
  <img src="1.webp" alt="图片4" title="图片4">
  <img src="1.avif" alt="图片4" title="图片4">
</body>

</html>
```

## 小节总结

| 属性 | 是否必填 | 作用 |
|------|---------|------|
| `src` | ✅ 必填 | 图片路径 |
| `alt` | ✅ 必填 | 替代文本（无障碍） |
| `width` | ❌ 可选 | 宽度 |
| `height` | ❌ 可选 | 高度 |
| `title` | ❌ 可选 | 悬停提示 |

关于图片格式：**WebP** 是目前兼顾质量和体积的最佳选择，但为了兼容性，实际开发中有时会用 `<picture>` 标签提供多种格式的备选方案——这个后面再学。
