---
title: 'CSS display 与浮动 float：块级 / 行内 / 行内块 / 浮动布局'
description: 'display 控制元素的显示类型——block、inline、inline-block、none；float 让元素脱离文档流实现图文环绕和并排布局。'
pubDate: 2026-07-08
tags: ['CSS', 'display', '浮动', 'float', 'clearfix', '布局']
category: '学习笔记'
order: 28
demo: '/examples/css-display-float/index.html'
---

## 前言

这一篇讲两个重要的 CSS 布局概念：

1. **display** — 控制元素的显示类型（块级、行内、行内块、隐藏）
2. **浮动 float** — 让元素脱离文档流，实现并排和环绕效果

## 一、display 显示类型

`display` 属性决定了元素在页面上的**展示方式**。

### 常用的 display 值

| 值 | 效果 | 说明 |
|:---:|:----:|------|
| `block` | 块级元素 | 独占一行，可设宽高 |
| `inline` | 行内元素 | 不换行，不可设宽高 |
| `inline-block` | 行内块 | 不换行，但可设宽高 |
| `none` | 隐藏 | 元素完全消失，不占位 |

### block — 块级

```css
display: block;
```

特点：**独占一行**，可以设置宽高。

默认是块级的标签：`div`、`p`、`h1~h6`、`ul`、`li`、`table` 等。

### inline — 行内

```css
display: inline;
```

特点：**不换行**，宽高无效，上下 margin 无效。

默认是行内的标签：`span`、`a`、`strong`、`em`、`label` 等。

```css
span {
  width: 100px;        /* ❌ 无效 */
  height: 100px;       /* ❌ 无效 */
  margin-top: 10px;    /* ❌ 无效 */
  margin-left: 10px;   /* ✅ 有效 */
}
```

### inline-block — 行内块

`inline-block` 结合了 block 和 inline 的优点——**不换行，但能设宽高**。

```css
.btn {
  display: inline-block;
  width: 120px;        /* ✅ 有效 */
  height: 40px;        /* ✅ 有效 */
  margin: 10px;        /* ✅ 上下左右都有效 */
}
```

```html
<span class="btn">按钮 1</span>
<span class="btn">按钮 2</span>  <!-- 并排显示 -->
```

### none — 隐藏

```css
.hidden {
  display: none;   /* 元素完全隐藏，不占位 */
}
```

> `display: none` 和 `visibility: hidden` 的区别：
> - `display: none` — 元素消失，**不占位**（像被删掉了）
> - `visibility: hidden` — 元素隐藏，**仍占位**（留下空白）

## 二、浮动 float

浮动最初的设计目的是**实现图文环绕**，后来被广泛用于块级元素的并排布局。

### 基本语法

```css
float: left;    /* 左浮动 */
float: right;   /* 右浮动 */
float: none;    /* 不浮动（默认） */
```

### 浮动的作用

1. **让块级元素并排显示**（以前没有 Flex 时，浮动是并排布局的主要方式）
2. **实现图文环绕**（文字环绕图片）

```css
img {
  float: left;     /* 图片左浮动，文字环绕在右侧 */
  margin-right: 10px;
}
```

### 块级元素并排

```html
<div style="float: left; width: 100px; height: 100px; background: pink;">1</div>
<div style="float: left; width: 100px; height: 100px; background: skyblue;">2</div>
<div style="float: left; width: 100px; height: 100px; background: lightgreen;">3</div>
```

三个 div 原本独占一行，加了 `float: left` 后并排显示。

## 三、浮动的影响

浮动元素会**脱离文档流**，导致父元素**高度塌陷**：

```html
<div class="father">
  <div class="son" style="float: left;">浮动元素</div>
</div>
```

`.father` 会失去高度（高度为 0），因为 `.son` 脱离了文档流。

## 四、清除浮动（clearfix）

### clear 属性

```css
clear: left;    /* 不允许左侧有浮动元素 */
clear: right;   /* 不允许右侧有浮动元素 */
clear: both;    /* 两侧都不允许（最常用） */
```

### clearfix 方案（最推荐）

在父元素上应用 clearfix，解决高度塌陷：

```css
/* clearfix：清除浮动，让父元素包裹浮动子元素 */
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
```

```html
<div class="father clearfix">
  <div class="son" style="float: left;">浮动元素</div>
  <div class="son" style="float: left;">浮动元素</div>
</div>
```

加上 `clearfix` 后，父元素就能正确包裹住浮动的子元素了。

### 其他清除浮动的方式

```css
/* 方式 1：父元素 overflow: hidden */
.father { overflow: hidden; }

/* 方式 2：父元素也浮动（但不推荐，影响布局） */
.father { float: left; }

/* 方式 3：额外空标签（不推荐，增加无用标签） */
/* <div style="clear: both;"></div> */
```

> **最推荐 clearfix ::after 方式**，不影响布局，不需要额外标签。

## 我练习的演示页面

做了一个 display 和浮动布局的综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 属性 | 值 | 作用 |
|------|:---:|------|
| `display` | `block` | 块级（独占一行，可设宽高） |
| `display` | `inline` | 行内（不换行，不可设宽高） |
| `display` | `inline-block` | 行内块（不换行，可设宽高） |
| `display` | `none` | 隐藏（不占位） |
| `float` | `left` / `right` | 浮动，脱离文档流 |
| `clear` | `both` | 清除浮动影响 |

> **浮动主要用于：** 1. 图文环绕 2. 块级元素并排（旧方法）<br>
> **现在更推荐使用 Flex 布局**来实现并排，不过浮动仍然是需要掌握的基础知识。
