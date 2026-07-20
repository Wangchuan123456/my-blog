---
title: '响应式网页开发：媒体查询 @media / 响应式布局 / Bootstrap'
description: '响应式设计让同一个页面在不同屏幕上都显示良好——媒体查询是核心，Bootstrap 是成熟框架。'
pubDate: 2026-07-18
tags: ['CSS', '响应式', '媒体查询', 'media', 'Bootstrap']
category: '学习笔记'
order: 38
demo: '/examples/css-responsive/index.html'
---

## 前言

**响应式设计（Responsive Web Design）** ——一个网站适配所有屏幕尺寸，PC、平板、手机都能看。

核心技术：**媒体查询（@media）** + **流式布局** + **弹性单位**。

## 一、媒体查询 @media

根据屏幕宽度应用不同的样式。

```css
/* 语法 */
@media 媒体类型 and (媒体特征) {
  样式
}
```

### 常用断点

```css
/* 超大屏幕 ≥ 1200px */
@media screen and (min-width: 1200px) {
  body { background: green; }
}

/* 中等屏幕 768px ~ 1200px */
@media screen and (min-width: 768px) and (max-width: 1199px) {
  body { background: orange; }
}

/* 小屏幕 < 768px */
@media screen and (max-width: 767px) {
  body { background: red; }
}
```

### 完整示例

```css
/* 默认（手机优先）：单列布局 */
.container {
  width: 100%;
  padding: 0 15px;
}

/* 平板 ≥ 768px：两列 */
@media (min-width: 768px) {
  .container { width: 750px; margin: 0 auto; }
  .col { width: 50%; }
}

/* 桌面 ≥ 992px：三列 */
@media (min-width: 992px) {
  .container { width: 970px; }
  .col { width: 33.33%; }
}

/* 大屏 ≥ 1200px：固定宽度 */
@media (min-width: 1200px) {
  .container { width: 1170px; }
}
```

## 二、响应式布局实战

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

/* 默认单列 */
.item { width: 100%; }

/* 平板 */
@media (min-width: 768px) {
  .item { width: 50%; }      /* 两列 */
}

/* 桌面 */
@media (min-width: 1200px) {
  .item { width: 25%; }      /* 四列 */
}
```

## 三、Bootstrap 框架

Bootstrap 是最流行的 CSS 框架，帮我们写好了响应式网格系统。

### 引入

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

### 容器

```html
<div class="container">      <!-- 固定宽度，响应式断点 -->
<div class="container-fluid"> <!-- 100% 宽度 -->
```

### 网格系统

Bootstrap 把一行分成 **12 列**：

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3">列1</div>
    <div class="col-12 col-md-6 col-lg-3">列2</div>
    <div class="col-12 col-md-6 col-lg-3">列3</div>
    <div class="col-12 col-md-6 col-lg-3">列4</div>
  </div>
</div>
```

| class | 含义 |
|:------|:-----|
| `col-12` | 手机占 12 列（满宽） |
| `col-md-6` | 平板占 6 列（一半） |
| `col-lg-3` | 桌面占 3 列（四分之一） |

### 断点前缀

| 前缀 | 最小宽度 | 设备 |
|:----:|:--------:|:----:|
| `col-` | 0 | 手机 |
| `col-sm-` | 576px | 小屏 |
| `col-md-` | 768px | 平板 |
| `col-lg-` | 992px | 桌面 |
| `col-xl-` | 1200px | 大屏 |

### Bootstrap 字体图标

```html
<i class="bi bi-search"></i>   <!-- 搜索图标 -->
<i class="bi bi-heart"></i>    <!-- 心形图标 -->
```

## 我练习的演示页面

做了一个响应式布局和 Bootstrap 网格的演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 技术 | 作用 |
|:----|:-----|
| `@media` | 根据屏幕宽度应用不同样式 |
| 响应式布局 | 一套代码适配所有设备 |
| Bootstrap | 成熟的响应式 UI 框架 |
| 网格系统 | 12 列响应式布局，col-md-6 等 |
