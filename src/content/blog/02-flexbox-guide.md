---
title: 'Flexbox 完全指南：一张图搞懂所有属性'
description: 'Flexbox 是前端布局的核心技能，这篇文章用图解的方式帮你彻底掌握 flex 容器和项目的所有属性。'
pubDate: 2025-02-01
tags: ['CSS', 'Flexbox', '布局']
category: '学习笔记'
---

## 为什么 Flexbox 如此重要？

在 Flexbox 出现之前，CSS 垂直居中是一个世纪难题。现在，三行代码搞定：

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 核心概念

Flexbox 有两个层级：

1. **Flex 容器**（parent）——设置 `display: flex`
2. **Flex 项目**（children）——容器内的直接子元素

## 容器属性

### display

```css
.container {
  display: flex;      /* 块级 flex 容器 */
  display: inline-flex; /* 内联 flex 容器 */
}
```

### flex-direction：主轴方向

```css
.container {
  flex-direction: row;            /* 默认：水平从左到右 */
  flex-direction: row-reverse;    /* 水平从右到左 */
  flex-direction: column;         /* 垂直从上到下 */
  flex-direction: column-reverse; /* 垂直从下到上 */
}
```

### justify-content：主轴对齐

```css
.container {
  justify-content: flex-start;    /* 默认：起点对齐 */
  justify-content: flex-end;      /* 终点对齐 */
  justify-content: center;        /* 居中 */
  justify-content: space-between; /* 两端对齐 */
  justify-content: space-around;  /* 均匀分布（两侧间距为中间的一半） */
  justify-content: space-evenly;  /* 完全均匀分布 */
}
```

### align-items：交叉轴对齐

```css
.container {
  align-items: stretch;   /* 默认：拉伸填满 */
  align-items: flex-start; /* 起点对齐 */
  align-items: flex-end;   /* 终点对齐 */
  align-items: center;     /* 居中 */
  align-items: baseline;   /* 基线对齐 */
}
```

## 项目属性

### flex-grow / flex-shrink / flex-basis

这是 Flexbox 最强大的地方，也是初学者最容易困惑的地方。

```css
.item {
  flex: 1; /* 简写：flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
}
```

**口诀：**
- `flex-grow`：空间多了，谁拿？（比例分配剩余空间）
- `flex-shrink`：空间少了，谁缩？（比例压缩）
- `flex-basis`：原始大小是多少？

## 实战：导航栏

```html
<nav class="nav">
  <div class="logo">Logo</div>
  <div class="links">
    <a href="#">首页</a>
    <a href="#">关于</a>
    <a href="#">项目</a>
  </div>
  <div class="profile">👤</div>
</nav>
```

```css
.nav {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background: #f8f9fa;
}
.logo { margin-right: auto; } /* 推到最左边 */
.links { display: flex; gap: 1.5rem; }
```

## 常见布局模式

### 水平居中 + 垂直居中（终极方案）

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 圣杯布局（三栏）

```css
.container {
  display: flex;
}
.sidebar {
  width: 250px;
  flex-shrink: 0;
}
.main {
  flex: 1; /* 自动占满剩余空间 */
}
```

---

Flexbox 是现代 CSS 布局的基石，掌握它之后，你会发现**没有排不好的版**。下一篇文章会讲 Grid，两者的区别和适用场景。
