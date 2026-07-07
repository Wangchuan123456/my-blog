---
title: 'CSS 结构伪类选择器 :first-child :last-child :nth-child'
description: '根据元素在父元素中的位置来选择——第几个、奇数偶数、前几个后几个，一篇搞懂结构伪类。'
pubDate: 2026-07-09
tags: ['CSS', '结构伪类', 'first-child', 'last-child', 'nth-child', '隔行变色']
category: '学习笔记'
order: 19
demo: '/examples/css-structural-pseudo/index.html'
---

## 前言

前面学的选择器都是根据**元素本身特征**（标签名、class、id）或**用户行为**（hover、focus）来选。

结构伪类选择器则是根据元素在**父元素中的位置**来选——比如"第一个子元素"、"最后一个"、"第 n 个"、"奇数个"……

## 基本结构伪类

| 伪类 | 含义 | 示例 |
|------|------|------|
| `:first-child` | 父元素中的第一个子元素 | `li:first-child` |
| `:last-child` | 父元素中的最后一个子元素 | `li:last-child` |
| `:nth-child(n)` | 父元素中的第 n 个子元素 | `li:nth-child(3)` |

## 一、:first-child — 第一个子元素

选中父元素中的**第一个**子元素。

```css
.ul1 li:first-child {
  color: red;
}
```

```html
<ul class="ul1">
  <li>第1个li</li>    <!-- ✅ 选中，红色 -->
  <li>第2个li</li>
  <li>第3个li</li>
  ...
</ul>
```

## 二、:last-child — 最后一个子元素

选中父元素中的**最后一个**子元素。

```css
.ul1 li:last-child {
  color: blue;
}
```

```html
<ul class="ul1">
  <li>第1个li</li>
  ...
  <li>第9个li</li>
  <li>第10个li</li>   <!-- ✅ 选中，蓝色 -->
</ul>
```

## 三、:nth-child(n) — 第 n 个子元素

### 指定数字

```css
/* 第 3 个 li */
.ul1 li:nth-child(3) {
  color: green;
}

/* 第 8 个 li */
.ul1 li:nth-child(8) {
  color: purple;
}
```

### 关键字：odd / even

```css
/* 奇数行 */
li:nth-child(odd) {
  color: red;
}

/* 偶数行 */
li:nth-child(even) {
  color: blue;
}
```

**实际应用：表格隔行变色**

```css
/* 偶数行变灰背景 */
.data tr:nth-child(even) {
  background-color: #f9f9f9;
}
```

### 公式：an + b

`:nth-child()` 支持公式，非常强大：

```css
/* 每隔 5 个选一个（第 5、10、15…） */
li:nth-child(5n) { ... }

/* 第 3 个以后的所有元素（n 从 0 开始） */
li:nth-child(n+3) {
  color: red;
}

/* 前 2 个元素（-n+3，n=0→3, n=1→2, n=2→1） */
li:nth-child(-n+2) {
  color: blue;
}
```

#### 公式理解

`n` 从 **0** 开始计数，代入公式算出要选的序号：

| 公式 | n=0 | n=1 | n=2 | n=3 | 说明 |
|------|:---:|:---:|:---:|:---:|------|
| `n+3` | 3 | 4 | 5 | 6 | 第 3 个及以后 |
| `-n+2` | 2 | 1 | 0 | -1 | 前 2 个 |
| `3n` | 0 | 3 | 6 | 9 | 每隔 3 个 |
| `2n+1` | 1 | 3 | 5 | 7 | 奇数（等价于 odd） |
| `2n` | 0 | 2 | 4 | 6 | 偶数（等价于 even） |

> 注意：序号是从 **1** 开始数的，所以 `n=0` 时如果算出来是 0 或负数，不会有元素被选中。

## 四、综合案例：表格隔行变色 + 悬停

结构伪类最经典的应用就是表格样式：

```css
/* 表格基础 */
.data {
  border-collapse: collapse;
  width: 400px;
  text-align: center;
}

/* 表头 */
.data tr:first-child {
  background-color: #8fbcf1;
  color: #fff;
}

/* 偶数行变色 */
.data tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* 鼠标经过高亮 */
.data tr:hover {
  background-color: #f1f1f1;
}
```

效果：表头蓝底白字 → 偶数行灰底 → 鼠标悬停高亮

## 我练习的演示页面

做了一个结构伪类选择器的综合演示，包含 first-child、last-child、nth-child 的各种用法和表格隔行变色案例。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 伪类 | 含义 | 适用场景 |
|------|------|---------|
| `:first-child` | 父元素中第一个子元素 | 表头、第一个特殊样式 |
| `:last-child` | 父元素中最后一个子元素 | 末尾特殊样式 |
| `:nth-child(n)` | 第 n 个子元素 | 精确指定位置 |
| `:nth-child(odd)` | 奇数子元素 | **隔行变色** 🎯 |
| `:nth-child(even)` | 偶数子元素 | **隔行变色** 🎯 |
| `:nth-child(an+b)` | 公式匹配 | 复杂位置选择 |

> **提示：** `nth-child` 是**所有子元素**中计数（不区分类型）。如果想在"同类型元素"中计数，可以用 `:nth-of-type`。
