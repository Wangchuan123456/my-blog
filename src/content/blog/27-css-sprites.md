---
title: 'CSS 精灵图（CSS Sprites）：原理与 background-position 用法'
description: '精灵图把多个小图标合成一张大图，用 background-position 显示需要的部分——减少 HTTP 请求，提升加载速度。'
pubDate: 2026-07-08
tags: ['CSS', '精灵图', 'CSS Sprites', 'background-position', '性能优化']
category: '学习笔记'
order: 27
demo: '/examples/css-sprites/index.html'
---

## 前言

**精灵图（CSS Sprites）** 是一种性能优化技术——把页面上多个小图标合并到**一张大图**中，通过 `background-position` 定位来显示需要的部分。

### 为什么需要精灵图？

一个网页可能有好几十个小图标，如果每个图标都单独一张图片：

- 浏览器要发 **几十次 HTTP 请求** 去加载
- 每个请求都有开销，页面加载变慢

精灵图把所有小图标合成一张图，**只需要一次请求**，然后通过背景定位裁切显示。

```
┌──精灵图（一张大图）──┐
│  🔍  🔔  ⚙️  💬  │  ← 每个小图标在固定位置
│  ⭐  ❤️  📌  ✏️  │
└────────────────────┘
         ↓
每个元素只显示自己需要的那个小区域
```

## 一、精灵图的核心原理

```css
.box {
  width: 27px;            /* 图标宽度 */
  height: 26px;           /* 图标高度 */
  background: url(./sprite.png) no-repeat;   /* 用整张精灵图作为背景 */
}

.box1 {
  background-position: 0 -169px;   /* 向左/上偏移，显示需要的图标 */
}

.box2 {
  background-position: -90px -170px;
}
```

### 步骤

1. **准备好精灵图** — 设计工具把多个图标合成一张 `png` 图片
2. **测量图标尺寸** — 每个图标的宽高（如 27×26px）
3. **测量图标位置** — 图标在精灵图中的坐标（x, y）
4. **写 CSS** — 用 `background-position` 偏移到对应位置

### background-position 的值怎么来的？

```css
background-position: x y;
/*                    ← →  ↑ ↓  */
```

- **负值**表示背景图片向左/上移动
- 比如 `background-position: -90px -170px` 表示背景向左移 90px、向上移 170px

```
精灵图坐标原点在左上角（0,0）
          ──────────→ x
          │
          │   ┌────┐
          │   │图标 │  要显示这个图标，就把背景向左、向上移动
          │   └────┘   让这个图标刚好落在元素的显示区域内
          ↓
          y
```

## 二、使用步骤详解

### 1. 准备精灵图

设计工具（PS/Figma）把多个图标拼成一张图，记录每个图标的位置。

### 2. 设置容器尺寸

容器宽高**等于**要显示的图标宽高：

```css
.box {
  width: 27px;     /* 图标宽度 */
  height: 26px;    /* 图标高度 */
}
```

### 3. 设置背景图片

```css
.box {
  background: url(./images/sprites.png) no-repeat;
}
```

### 4. 用 background-position 定位

```css
/* 显示第一个图标 */
.icon1 { background-position: 0 -169px; }

/* 显示第二个图标 */
.icon2 { background-position: -90px -170px; }
```

> **提示：** `background-position` 的值可以从设计工具中量出来，或者从精灵图提供方获取。

## 三、精灵图 vs 字体图标

| 对比 | 精灵图 | 字体图标（iconfont） |
|------|--------|-------------------|
| 缩放 | 放大可能模糊（位图） | **任意缩放清晰** ✅ |
| 颜色 | 不能改，需重新切图 | **直接改 color** ✅ |
| 尺寸 | 不能改，需重新切图 | **直接改 font-size** ✅ |
| 请求数 | 一张图一次请求 | 一个字体文件一次请求 |
| 适用场景 | 复杂图标/logo | 简单图标/符号 |

> **现在更推荐用字体图标或 SVG 图标。** 精灵图在移动端和 Retina 屏上有模糊问题，字体图标和 SVG 是矢量，适配更好。但精灵图的思想（合并请求）仍然值得了解。

## 我练习的演示页面

做了一个精灵图的使用演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

1. **精灵图** = 多个小图标合成一张大图
2. 用 `background-image` 设置精灵图作为背景
3. 用 `background-position` 负值偏移，显示需要的图标部分
4. 容器的宽高 = 图标的宽高
5. 优点是减少 HTTP 请求，缺点是缩放和颜色修改不方便
