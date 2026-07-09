---
title: 'CSS Flex 弹性盒布局：flex / justify-content / align-items 完全指南'
description: 'Flex 是目前最常用的 CSS 布局方式——一行代码让子元素水平或垂直排列，轻松控制对齐、居中、换行和分布方式。'
pubDate: 2026-07-08
tags: ['CSS', 'Flex', '弹性盒', '布局', 'flexbox']
category: '学习笔记'
order: 29
demo: '/examples/css-flexbox/index.html'
---

## 前言

**Flex（弹性盒布局）** 是 CSS3 引入的布局模式，专门用来做**一维布局**——水平或垂直方向的排列。

在 Flex 之前，要实现块级元素并排需要靠浮动（float），又要清除浮动，非常麻烦。Flex 一行代码就解决了。

> Flex = Flexible Box = 弹性盒子

## 核心概念

```
容器（flex container）               主轴方向 (main axis)
┌─────────────────────────────────────────→
│  ┌──────┐  ┌──────┐  ┌──────┐
│  │ 项目  │  │ 项目  │  │ 项目  │    ← 项目 (flex items)
│  └──────┘  └──────┘  └──────┘
│
↓
交叉轴方向 (cross axis)
```

- **容器** — 设为 `display: flex` 的元素
- **项目** — 容器内的直接子元素
- **主轴** — 默认水平方向（从左到右）
- **交叉轴** — 默认垂直方向（从上到下）

## 一、容器属性（写在父元素上）

### display: flex

```css
.container {
  display: flex;   /* 设为弹性容器 */
}
```

子元素默认**水平排列**，不换行。

### flex-direction — 主轴方向

```css
flex-direction: row;              /* 默认：水平从左到右 */
flex-direction: row-reverse;      /* 水平从右到左 */
flex-direction: column;           /* 垂直从上到下 */
flex-direction: column-reverse;   /* 垂直从下到上 */
```

### justify-content — 主轴对齐方式

```css
justify-content: flex-start;     /* 默认：左对齐 */
justify-content: flex-end;       /* 右对齐 */
justify-content: center;         /* 居中 */
justify-content: space-between;  /* 两端对齐，中间等距 */
justify-content: space-around;   /* 每个项目两侧间距相等 */
justify-content: space-evenly;   /* 所有间距完全相等 */
```

### align-items — 交叉轴对齐方式

```css
align-items: stretch;     /* 默认：拉伸填满 */
align-items: flex-start;  /* 顶部对齐 */
align-items: flex-end;    /* 底部对齐 */
align-items: center;      /* 垂直居中（最常用） */
```

### flex-wrap — 是否换行

```css
flex-wrap: nowrap;    /* 默认：不换行，压缩项目宽度 */
flex-wrap: wrap;      /* 换行 */
flex-wrap: wrap-reverse;  /* 换行，反向排列 */
```

### align-content — 多行对齐

当 `flex-wrap: wrap` 有多行时，控制行与行之间的对齐：

```css
align-content: flex-start;    /* 顶部对齐 */
align-content: center;        /* 垂直居中 */
align-content: space-between; /* 两端对齐 */
align-content: stretch;       /* 拉伸填满 */
```

## 二、项目属性（写在子元素上）

### flex — 分配剩余空间

```css
.item {
  flex: 1;   /* 等分剩余空间 */
}

.item1 { flex: 1; }
.item2 { flex: 2; }   /* item2 占的宽度是 item1 的两倍 */
.item3 { flex: 1; }
```

### align-self — 单个项目交叉轴对齐

覆盖容器的 `align-items` 设置：

```css
.item {
  align-self: center;       /* 单个垂直居中 */
  align-self: flex-end;     /* 单个底部对齐 */
  align-self: stretch;      /* 单个拉伸 */
}
```

### order — 排序

```css
.item1 { order: 3; }   /* 显示在最后 */
.item2 { order: 1; }   /* 显示在最前 */
.item3 { order: 2; }   /* 显示在中间 */
```

默认所有项目 `order: 0`，值越小的越靠前。

## 三、最常用的 Flex 写法

### 水平居中（最常用）

```css
.container {
  display: flex;
  justify-content: center;   /* 水平居中 */
  align-items: center;       /* 垂直居中 */
}
```

**一行代码让子元素在容器中水平和垂直都居中**——这是 Flex 最经典的应用。

### 等分布局

```css
.container {
  display: flex;
}
.item {
  flex: 1;        /* 每个项目等分宽度 */
  margin: 0 8px;  /* 项目间距 */
}
```

### 两端对齐导航

```css
.nav {
  display: flex;
  justify-content: space-between;  /* 两端对齐 */
}
```

## 我练习的演示页面

做了一个 Flex 弹性盒布局的综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

### 容器属性

| 属性 | 常用值 | 作用 |
|------|--------|------|
| `display` | `flex` | 设为弹性容器 |
| `justify-content` | `center` / `space-between` | 主轴对齐 |
| `align-items` | `center` / `flex-start` | 交叉轴对齐 |
| `flex-direction` | `row` / `column` | 主轴方向 |
| `flex-wrap` | `wrap` | 是否换行 |

### 项目属性

| 属性 | 常用值 | 作用 |
|------|--------|------|
| `flex` | `1` | 等分剩余空间 |
| `align-self` | `center` / `flex-end` | 单个项目对齐 |
| `order` | 数字 | 排列顺序 |

> **一句话记住：** `display: flex` + `justify-content: center` + `align-items: center` = 完美居中 🎯
