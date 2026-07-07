---
title: 'CSS 页面基本布局：固定宽度居中布局（header / nav / main / footer）'
description: '用 CSS 搭建经典页面布局——页头全宽、导航栏居中、主体内容居中、页脚全宽，以及 margin: 0 auto 的用法。'
pubDate: 2026-07-07
tags: ['CSS', '布局', 'margin', '居中', '页面结构']
category: '学习笔记'
order: 15
demo: '/examples/css-layout/index.html'
---

## 前言

一个网页通常由四个部分组成：**页头、导航栏、主体内容、页脚**。

最常见的布局模式是**固定宽度居中布局**——页头和页脚满屏宽，导航和主体内容在中间居中显示。

```
┌──────────────────────────────────┐  ← header（全宽）
│                                  │
│  ┌──────────────────────────┐    │  ← nav（居中，固定宽度）
│  └──────────────────────────┘    │
│  ┌──────────────────────────┐    │
│  │                          │    │  ← main（居中，固定宽度）
│  │     主体内容区域          │    │
│  │                          │    │
│  └──────────────────────────┘    │
│                                  │
├──────────────────────────────────┤  ← footer（全宽）
│                                  │
└──────────────────────────────────┘
```

## 一、HTML 结构

用语义化结构标签搭建骨架：

```html
<body>
  <header class="header"></header>     <!-- 页头 -->
  <nav class="nav center"></nav>       <!-- 导航栏 -->
  <main class="main center"></main>    <!-- 主体内容 -->
  <footer class="footer"></footer>     <!-- 页脚 -->
</body>
```

这里用到了之前学的语义标签：`<header>`、`<nav>`、`<main>`、`<footer>`。

## 二、CSS 样式

### 1. 通配符重置默认边距

浏览器会给元素自带一些默认边距，先清除掉：

```css
* {
  margin: 0;
  padding: 0;
}
```

### 2. 页头（全宽）

页头通常是全屏宽度的，不需要设置宽度（块级元素默认占满父容器）：

```css
.header {
  background-color: black;
  height: 80px;
}
```

不设 `width` → 默认 `auto`，自动占满整行。

### 3. 导航栏（固定宽度 + 居中）

导航栏内容区域有**固定宽度**，并且在页面上**水平居中**：

```css
.nav {
  background-color: skyblue;
  height: 60px;
  width: 1000px;        /* 固定宽度 */
}
```

此时导航栏是 1000px 宽，但靠左对齐。要让它在页面中居中，需要加上 `margin: 0 auto`。

### 4. margin: 0 auto — 块级元素居中

```css
.center {
  margin: 0 auto;    /* 水平居中 */
}
```

`margin: 0 auto` 的含义：

| 部分 | 值 | 作用 |
|------|:--:|------|
| `0` | 上下外边距为 0 | 垂直方向 |
| `auto` | 左右外边距自动计算 | **水平居中** |

浏览器会自动计算左右 margin，让元素在父容器中水平居中。

> **原理：** 当一个块级元素设置了固定宽度后，`margin: 0 auto` 让浏览器自动分配左右 margin 为相等值，从而实现居中。

### 5. 主体内容（固定宽度 + 居中）

和导航栏一样，固定宽度并居中：

```css
.main {
  background-color: pink;
  height: 500px;
  width: 1000px;
}
```

### 6. 页脚（全宽）

和页头一样，不设宽度，默认占满：

```css
.footer {
  background-color: purple;
  height: 80px;
}
```

## 三、完整代码

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>页面基本布局</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .header {
      background-color: black;
      height: 80px;
    }

    .nav {
      background-color: skyblue;
      height: 60px;
      width: 1000px;
    }

    .main {
      background-color: pink;
      height: 500px;
      width: 1000px;
    }

    .footer {
      background-color: purple;
      height: 80px;
    }

    .center {
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <header class="header"></header>
  <nav class="nav center"></nav>
  <main class="main center"></main>
  <footer class="footer"></footer>
</body>
</html>
```

## 四、布局要点总结

| 区域 | 宽度 | 居中？ | 关键 CSS |
|------|:----:|:------:|----------|
| 页头 header | 全宽（默认） | ❌ | `height: 80px` |
| 导航 nav | 固定（1000px） | ✅ | `width: 1000px; margin: 0 auto` |
| 主体 main | 固定（1000px） | ✅ | `width: 1000px; margin: 0 auto` |
| 页脚 footer | 全宽（默认） | ❌ | `height: 80px` |

### 关于高度

- 块级元素的高度**默认由内容撑开**
- 如果内容为空，高度为 0，看不到背景色
- 示例中显式设置了 `height`，是为了在没有内容时也能看到色块区域
- 实际开发中，页面高度通常由内容撑开，很少写固定高度

## 五、这个布局模式的应用场景

这种 **header + nav + main + footer** 的布局模式非常常见：

- 企业官网
- 个人博客
- 产品展示页
- 管理后台

掌握了这个基础布局，再往后学 Flex 和 Grid，就能做更复杂的布局了。

## 我练习的演示页面

做了一个可视化的布局演示页面，展示了四个区域的颜色区分和居中效果。

点击文章上方的「🌐 在线演示」查看。

## 小结

1. 页面布局 = **header + nav + main + footer** 四个区域
2. 全宽元素**不设 width**，块级元素默认撑满
3. 固定宽度元素用 `width` 设宽，用 `margin: 0 auto` **居中**
4. 通配符 `* { margin: 0; padding: 0; }` 清除默认边距
