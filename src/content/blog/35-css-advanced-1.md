---
title: 'CSS 前沿技术：SVG / clip-path / filter 滤镜 / 动画时间线'
description: 'SVG 矢量图形、clip-path 裁剪路径、filter 滤镜效果和 animation-timeline 滚动驱动动画——四个前端新特性。'
pubDate: 2026-07-15
tags: ['CSS', 'SVG', 'clip-path', 'filter', '动画时间线', '前沿技术']
category: '学习笔记'
order: 35
demo: '/examples/css-advanced-1/index.html'
---

## 一、SVG 矢量图形

SVG（可缩放矢量图形）用 XML 描述图形，**无限放大不模糊**。

```svg
<svg width="200" height="200">
  <rect x="10" y="10" width="100" height="80" fill="pink" stroke="red" stroke-width="2"/>
  <circle cx="100" cy="100" r="50" fill="skyblue"/>
</svg>
```

```html
<img src="icon.svg" alt="">   <!-- 像图片一样引用 -->
```

### SVG 描边动画

利用 `stroke-dasharray`（虚线长度）和 `stroke-dashoffset`（偏移），配合 animation 实现描边生长效果：

```css
path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 2s ease forwards;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
```

## 二、clip-path 裁剪

把元素裁剪成各种形状——圆形、多边形、自定义路径。

```css
/* 圆形裁剪 */
clip-path: circle(50%);

/* 多边形裁剪 */
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

/* 文字裁剪 */
clip-path: url(#text-path);
```

## 三、filter 滤镜

给元素添加类似 Photoshop 的滤镜效果。

| 滤镜 | 作用 | 示例 |
|:----:|:----|:----:|
| `blur()` | 模糊 | `filter: blur(5px)` |
| `brightness()` | 亮度 | `filter: brightness(0.5)` |
| `grayscale()` | 灰度 | `filter: grayscale(1)` |
| `sepia()` | 褐色 | `filter: sepia(1)` |
| `hue-rotate()` | 色相旋转 | `filter: hue-rotate(90deg)` |
| `drop-shadow()` | 投影 | `filter: drop-shadow(2px 2px 5px #000)` |

```css
img:hover {
  filter: grayscale(1);     /* 鼠标悬停变黑白 */
}

/* 组合使用 */
filter: brightness(1.2) blur(2px);
```

## 四、背景滤镜 backdrop-filter

对元素**背后**的区域应用滤镜，产生玻璃效果：

```css
.box {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);   /* 毛玻璃效果 */
}
```

## 五、动画时间线 animation-timeline

让动画随**滚动**驱动，不再需要 JavaScript：

```css
@keyframes reveal {
  from { opacity: 0; transform: translateY(50px); }
  to   { opacity: 1; transform: translateY(0); }
}

.box {
  animation: reveal 1s ease;
  animation-timeline: view();   /* 视图时间线：元素进入视口时播放 */
}
```

## 我练习的演示页面

做了一个 SVG、裁剪、滤镜和滚动动画的综合演示。

点击文章上方的「🌐 在线演示」查看。
