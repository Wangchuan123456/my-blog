---
title: 'CSS 定位布局：相对定位 / 绝对定位 / 固定定位 / 粘性定位 / z-index'
description: '定位让元素脱离文档流自由移动——relative、absolute（子绝父相）、fixed、sticky，以及叠放次序 z-index。'
pubDate: 2026-07-10
tags: ['CSS', '定位', 'position', 'relative', 'absolute', 'fixed', 'sticky', 'z-index']
category: '学习笔记'
order: 30
demo: '/examples/css-position/index.html'
---

## 前言

CSS 定位（position）用来控制元素在页面上的**位置**。与浮动不同，定位可以让元素**脱离文档流**并精确指定位置。

五种定位方式：

| 定位 | 值 | 特点 |
|:----:|:---:|------|
| **静态定位** | `static` | 默认，标准流 |
| **相对定位** | `relative` | 相对自己原来位置移动，**占位** |
| **绝对定位** | `absolute` | 相对最近的有定位的父级，**脱标不占位** |
| **固定定位** | `fixed` | 相对浏览器视口固定，**不随滚动移动** |
| **粘性定位** | `sticky` | 滚动到阈值后固定（relative + fixed 结合） |

## 一、相对定位 relative

相对元素**原来的位置**偏移，原来的位置**依然占有**（不脱标）。

```css
.box1 {
  position: relative;
  top: 100px;
  left: 100px;
}
```

```html
<div class="box1">相对定位</div>
<div class="box2">标准流盒子</div>
```

- `top: 100px` → 向下移 100px
- `left: 100px` → 向右移 100px
- `.box2` 的位置不受影响（因为 `.box1` 原来的位置还在）

## 二、绝对定位 absolute

相对于最近的有定位（非 static）的**父元素**定位。**脱离文档流，不占位。**

```css
.father {
  position: relative;         /* 父相：作为子元素的参考 */
  width: 400px;
  height: 400px;
}

.son {
  position: absolute;         /* 子绝：相对父元素定位 */
  right: 20px;
  bottom: 50px;
}
```

**经典口诀：子绝父相**

- 子元素用 `absolute`，父元素用 `relative`
- 绝对定位的元素**完全脱标**，后面的元素会顶上去

## 三、固定定位 fixed

相对于**浏览器视口**固定位置，滚动页面时不动。

```css
.box {
  position: fixed;
  left: 50%;
  margin-left: -300px;    /* 水平居中技巧 */
  bottom: 30px;
}
```

常见用途：回到顶部按钮、底部广告条、固定导航栏。

> 注意：固定定位的盒子不能用 `margin: 0 auto` 居中，要用 `left: 50% + margin-left` 负一半宽度。

## 四、粘性定位 sticky

滚动时**到达某个阈值后固定**（relative + fixed 的结合）。

```css
.nav {
  position: sticky;
  top: 0;          /* 滚动到顶部时固定住 */
}
```

```html
<nav class="nav">导航栏</nav>
<main class="main">内容区域（高度很大方便滚动）</main>
```

效果：导航栏随页面滚动，到达顶部后**粘住不动**。

## 五、z-index 叠放次序

当多个定位元素重叠时，用 `z-index` 控制谁在上面。

```css
img {
  position: absolute;
}
img:hover {
  z-index: 1;        /* 鼠标悬停时放到最上面 */
}
```

- `z-index` 值越大越靠上
- 默认值 0
- 只对**定位元素**有效（`position` 不是 `static` 的）

## 我练习的演示页面

做了一个定位布局的综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 定位方式 | 是否脱标 | 参考对象 | 适用场景 |
|---------|:-------:|---------|---------|
| `relative` | ❌ 占位 | 自己原来的位置 | 微调位置、子绝父相的父容器 |
| `absolute` | ✅ 脱标 | 最近有定位的父级 | 弹出层、图标标记 |
| `fixed` | ✅ 脱标 | 浏览器视口 | 回到顶部、固定导航、广告条 |
| `sticky` | 混合 | 父容器 + 视口 | 粘性导航、表头固定 |
| `z-index` | — | 定位元素之间 | 控制谁盖住谁 |
