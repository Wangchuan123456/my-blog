---
title: 'CSS 分组选择器与链接伪类选择器 :link :visited :hover :active'
description: '分组选择器让多个元素共用样式，链接伪类控制链接不同状态的样式——LVHA 顺序要记牢。'
pubDate: 2026-07-09
tags: ['CSS', '分组选择器', '伪类', '链接', 'hover']
category: '学习笔记'
order: 18
demo: '/examples/css-pseudo-selectors/index.html'
---

## 前言

这一篇讲两个实用的选择器知识点：

1. **分组选择器** — 让多个选择器共用同一段样式
2. **链接伪类选择器** — 给链接的不同状态设置不同的样式

## 一、分组选择器（Grouping Selector）

也叫**并集选择器**或**选择器列表**。当多个元素需要相同的样式时，用逗号 `,` 把它们分组，共用一套样式。

### 基本用法

```css
/* ❌ 不用分组：重复写 */
h1 { color: red; }
h2 { color: red; }
h3 { color: red; }

/* ✅ 用分组：逗号隔开，只写一次 */
h1, h2, h3 {
  color: red;
}
```

### 可以分组各种选择器

不仅类型选择器可以分组，类、ID、关系选择器等都可以：

```css
/* 多个标签 */
h1, h2, h3, p {
  font-family: "Microsoft YaHei", sans-serif;
}

/* 标签 + 类 + ID 混合分组 */
h1, .title, #main-heading {
  color: #6c63ff;
}

/* 关系选择器也可以分组 */
.nav a, .footer a {
  text-decoration: none;
}
```

### 特点

| 项目 | 说明 |
|------|------|
| 符号 | 逗号 `,` |
| 作用 | 多个选择器共用一套样式 |
| 好处 | 减少重复代码，便于维护 |
| 注意 | 每个选择器独立写完整，不要省略 |

## 二、链接伪类选择器

伪类（Pseudo-class）是 CSS 给元素添加的**特殊状态**，用冒号 `:` 表示。

链接有四种状态，每种状态对应一个伪类：

| 伪类 | 含义 | 触发时机 |
|------|------|---------|
| `:link` | 未访问的链接 | 用户还没点过这个链接 |
| `:visited` | 已访问的链接 | 用户点过这个链接 |
| `:hover` | 鼠标悬停 | 鼠标放在链接上 |
| `:active` | 正在点击 | 鼠标按下还没松开 |

### 基本用法

```css
/* 1. 未访问 */
a:link {
  color: #000;
  text-decoration: none;
}

/* 2. 已访问 */
a:visited {
  color: orange;
}

/* 3. 鼠标悬停（最常用） */
a:hover {
  color: red;
  text-decoration: underline;
}

/* 4. 正在点击 */
a:active {
  color: blue;
}
```

### 重要：LVHA 顺序

四种伪类**必须按特定顺序写**，否则会互相覆盖不生效：

```
:link → :visited → :hover → :active
```

记忆技巧：**Love HA**（爱 哈）

- **L** — `:link`
- **V** — `:visited`
- **H** — `:hover`
- **A** — `:active`

### 实际开发中常用的简写

日常开发中，通常只写两种就够了：

```css
a {
  color: #000;
  text-decoration: none;
}

a:hover {
  color: red;
  text-decoration: underline;
}
```

先给 `<a>` 本身设默认样式，再单独改 `:hover` 的状态。这种方式更简洁，也不用操心 LVHA 顺序。

## 三、:hover 不仅用于链接

`:hover` 可以用在**任何元素**上，不只是链接：

```css
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
}

.box:hover {
  background-color: red;
  color: #fff;
}
```

鼠标移入变红，移出恢复——这是最常见的交互效果之一。

## 四、:focus 获得焦点

`:focus` 在表单元素获得焦点时触发（比如点击输入框）：

```css
.search:focus {
  background-color: red;
  width: 200px;
}
```

```html
<input type="text" class="search">
```

点击输入框 → 背景变红、宽度变宽。

## 五、分组选择器 + 伪类组合

```css
/* 多个元素共用一个 hover 效果 */
.card h3, .card p, .card .tag {
  transition: color 0.3s;
}

.card:hover h3,
.card:hover p,
.card:hover .tag {
  color: #6c63ff;
}
```

## 我练习的演示页面

做了一个分组选择器和链接伪类的综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

1. **分组选择器**（逗号 `,`）— 多个选择器共用样式，减少重复
2. **`:link`** — 未访问链接
3. **`:visited`** — 已访问链接
4. **`:hover`** — 鼠标悬停（**最常用**，不仅用于链接）
5. **`:active`** — 正在点击
6. **`:focus`** — 获得焦点（表单元素）
7. **LVHA 顺序** — `:link` → `:visited` → `:hover` → `:active`

> **日常开发推荐写法：** 直接用 `a {}` 设默认样式，再单独写 `a:hover {}`，比写全四个伪类更省心。
