---
title: '移动网页开发：移动端特点 / vw 适配 / rem 适配方案'
description: '移动端屏幕小、像素密度高、没有 hover——需要特殊的适配方案：vw 单位、rem 配合 flex 布局、以及常用插件。'
pubDate: 2026-07-17
tags: ['CSS', '移动端', 'vw', 'rem', '适配', '响应式']
category: '学习笔记'
order: 37
demo: '/examples/css-mobile/index.html'
---

## 前言

移动端网页开发和 PC 端有很大不同——屏幕小、触屏操作、像素密度高。需要专门的适配方案。

## 一、移动端特点

| 对比 | PC 端 | 移动端 |
|:----|:-----|:-------|
| 屏幕宽度 | 通常 ≥ 1200px | 通常 375~414px |
| 交互方式 | 鼠标（有 hover） | 手指触摸（无 hover） |
| 像素密度 | 1x | 2x / 3x（Retina） |
| 布局方案 | 固定宽度 | 自适应 / 响应式 |

```css
/* 移动端通用基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  /* 移动端字体设置 */
  font-family: -apple-system, Helvetica, sans-serif;
}
```

## 二、vw 适配方案

`vw` 相对于**视口宽度**，`100vw` = 视口宽度。

```css
.box {
  width: 50vw;         /* 占视口宽度的一半 */
  height: 30vw;        /* 动态高度 */
  font-size: 4vw;      /* 响应式字号 */
}
```

**结合 calc 动态计算：**

```css
/* 设计稿 375px，某个元素宽度 100px → 100/375 = 26.67vw */
.item {
  width: 26.67vw;
}
```

## 三、rem 适配方案

`rem` 相对于 `<html>` 的字号。通过 JS 动态设置 html 的 `font-size`，实现全页面适配。

```css
/* 默认 1rem = 16px */
html {
  font-size: 16px;
}
```

### 动态 rem 方案

```js
// 以 375px 设计稿为例，设置 1rem = 37.5px
document.documentElement.style.fontSize = 
  document.documentElement.clientWidth / 10 + 'px';
```

```css
/* 设计稿 100px → 100 / 37.5 = 2.6667rem */
.item {
  width: 2.6667rem;
}
```

### 常用工具

- **postcss-pxtorem** — 自动把 px 转 rem
- **flexible.js** — 手淘出的动态 rem 适配库

## 四、视口标签

移动端必须加的 `<meta>` 标签：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- `width=device-width` — 宽度等于设备宽度
- `initial-scale=1.0` — 初始缩放比例 1:1

## 我练习的演示页面

做了一个移动端适配的演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 方案 | 原理 | 适用场景 |
|:----|:-----|:---------|
| vw | 相对于视口宽度 | 简单页面、字号适配 |
| rem | 相对于 html 字号 | 整体布局适配 |
| 百分比 | 相对于父元素 | 局部宽度控制 |
| flexible.js | 动态 rem | 手淘方案，成熟稳定 |
