---
title: 'CSS Grid 网格布局：grid-template / fr / gap / repeat / 网格线'
description: 'Grid 是二维布局系统——同时控制行和列，比 Flex 更适合做复杂页面布局。'
pubDate: 2026-07-11
tags: ['CSS', 'Grid', '网格布局', 'grid-template', '布局']
category: '学习笔记'
order: 31
demo: '/examples/css-grid/index.html'
---

## 前言

Flex 是一维布局（水平或垂直），而 **Grid（网格）** 是**二维布局**——同时控制行和列。

```
Grid 布局：
┌─────┬─────┬─────┐
│  1  │  2  │  3  │
├─────┼─────┼─────┤
│  4  │  5  │  6  │
├─────┼─────┼─────┤
│  7  │  8  │  9  │
└─────┴─────┴─────┘
```

## 一、Grid 容器

```css
.container {
  display: grid;          /* 块级网格 */
  display: inline-grid;   /* 行内网格 */
}
```

## 二、grid-template-columns / rows 定义行列

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;   /* 3 列，每列 100px */
  grid-template-rows: 100px 100px 100px;       /* 3 行，每行 100px */
}
```

## 三、fr — 弹性单位

`fr` 是 Grid 的弹性单位，按比例分配剩余空间。

```css
/* 三等分 */
grid-template-columns: 1fr 1fr 1fr;

/* 1:2:1 比例 */
grid-template-columns: 1fr 2fr 1fr;
```

## 四、gap — 行列间距

```css
gap: 10px;           /* 行和列间距 */
row-gap: 10px;       /* 行间距 */
column-gap: 10px;    /* 列间距 */
```

## 五、repeat() 函数

重复创建相同尺寸的轨道：

```css
/* 等价于 1fr 1fr 1fr 1fr 1fr */
grid-template-columns: repeat(5, 1fr);

/* 两种尺寸交替 */
grid-template-columns: repeat(3, 100px 50px);
```

## 六、justify-content / align-content

控制网格整体在容器中的对齐：

```css
justify-content: space-between;  /* 水平对齐 */
align-content: space-between;    /* 垂直对齐 */
```

## 七、网格线（Grid Lines）

Grid 的列和行之间有编号的**网格线**，可以用来让项目跨越多个单元格。

```css
.item:first-child {
  grid-column: 1 / 3;    /* 从第 1 条线到第 3 条线（占 2 列） */
  grid-row: 1 / 3;       /* 从第 1 条线到第 3 条线（占 2 行） */
}
```

```
   1     2     3     4 ← 列线
1 ┌─────┬─────┬─────┐
  │     │     │     │
2 ├─────┼─────┼─────┤
  │     │     │     │
3 ├─────┼─────┼─────┤
  │     │     │     │
4 └─────┴─────┴─────┘
↑
行线
```

## 八、auto-fill 自动填充

框架宽度不够时自动换行：

```css
grid-template-columns: repeat(auto-fill, 200px);
/* 自动填充，每列 200px，放不下就换行 */
```

## 九、项目对齐

```css
/* 容器上的项目对齐 */
align-items: center;        /* 垂直居中 */
justify-items: center;      /* 水平居中 */

/* 单个项目覆盖 */
.item {
  align-self: center;
  justify-self: center;
}
```

## 我练习的演示页面

做了一个 Grid 网格布局的综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 属性 | 作用 | 示例 |
|------|------|------|
| `display: grid` | 设为网格容器 | — |
| `grid-template-columns` | 定义列 | `100px 1fr 1fr` |
| `grid-template-rows` | 定义行 | `100px 100px` |
| `gap` | 行列间距 | `10px` |
| `fr` | 弹性单位 | `1fr 2fr 1fr` |
| `repeat()` | 重复轨道 | `repeat(3, 1fr)` |
| `grid-column` | 项目跨列 | `1 / 3` |
| `grid-row` | 项目跨行 | `1 / 3` |
| `auto-fill` | 自动填充 | `repeat(auto-fill, 200px)` |
