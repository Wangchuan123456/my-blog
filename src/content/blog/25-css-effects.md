---
title: 'CSS 盒子阴影 box-shadow / 过渡 transition / 页面初始化 CSS Reset'
description: '盒子阴影让元素有立体感，过渡让变化更平滑，页面初始化消除浏览器默认样式差异——三个实用知识点。'
pubDate: 2026-07-08
tags: ['CSS', '盒子阴影', 'box-shadow', '过渡', 'transition', 'CSS初始化']
category: '学习笔记'
order: 25
demo: '/examples/css-effects/index.html'
---

## 前言

这一篇讲三个知识点：

1. **盒子阴影** `box-shadow` — 给元素添加阴影效果
2. **过渡** `transition` — 让样式变化有平滑动画
3. **页面初始化** CSS Reset — 消除浏览器默认样式差异

## 一、盒子阴影 box-shadow

### 基本语法

```css
box-shadow: 水平偏移 垂直偏移 模糊距离 扩散距离 颜色;
```

```css
/* 简单阴影 */
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

/* 五个值 */
box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);
```

### 各值含义

| 值 | 含义 | 必填 |
|:---:|------|:----:|
| `h-offset` | 水平偏移（正数往右，负数往左） | ✅ |
| `v-offset` | 垂直偏移（正数往下，负数往上） | ✅ |
| `blur` | 模糊距离（越大越模糊） | ❌ 默认 0 |
| `spread` | 扩散距离（越大阴影越大） | ❌ 默认 0 |
| `color` | 阴影颜色 | ❌ 默认黑色 |

### 常见用法

```css
/* 1. 轻微阴影 — 卡片效果 */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

/* 2. 悬浮抬升效果 */
box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 30px;

/* 3. 按钮阴影 */
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
```

### 鼠标悬停增强阴影

```css
.card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s;    /* 过渡，让阴影变化平滑 */
}

.card:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);  /* 阴影更深、更扩散 */
  transform: translateY(-2px);  /* 向上微微抬起 */
}
```

效果：鼠标移入时卡片"抬起来"，阴影更深——非常常见的 UI 交互。

## 二、过渡 transition

过渡让 CSS 属性变化时**不是瞬间变，而是平滑过渡**。

### 基本语法

```css
/* 单个属性 */
transition: width 0.3s;

/* 多个属性 */
transition: all 0.3s;           /* 所有变化的属性都过渡 */

/* 完整写法 */
transition: 属性 时长 速度曲线 延迟;
```

```css
.box {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, pink, blue);
  /* 谁做过渡给谁加 */
  transition: all 0.3s;
}

.box:hover {
  width: 220px;
  height: 220px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 30px;
  transform: rotate(30deg);
}
```

### 各值含义

| 值 | 含义 | 示例 |
|:---:|------|------|
| `property` | 要过渡的属性 | `width`、`all` |
| `duration` | 过渡时长 | `0.3s`、`300ms` |
| `timing-function` | 速度曲线 | `ease`（默认）、`linear` |
| `delay` | 延迟开始 | `0.1s` |

### 常用写法

```css
/* 最常用：所有属性 0.3 秒 */
transition: all 0.3s;

/* 指定单个属性 */
transition: width 0.5s;

/* 指定多个属性 */
transition: width 0.3s, box-shadow 0.3s;

/* 加缓动函数和延迟 */
transition: all 0.3s ease 0.1s;
```

### 使用原则

> **谁做过渡，给谁加。** `transition` 要写在**元素的原始状态**（不是 `:hover`）上，这样鼠标移入和移出都有过渡效果。

### 过渡 + 阴影 + 变换综合

```css
.ai-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #4a6cf7, #1e40af);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.ai-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #3b5bdb, #1a365d);
}

.ai-button:active {
  transform: translateY(0);
}
```

## 三、页面初始化 CSS Reset

不同浏览器对元素的默认样式不一样（比如边距、列表符号、下划线）。CSS Reset 就是**统一清除这些默认样式**。

### 简单重置

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 常用重置项

```css
/* 1. 清除列表默认样式（去掉前面的圆点） */
ul, ol {
  list-style: none;
}

/* 2. 清除链接下划线 */
a {
  text-decoration: none;
}

/* 3. 清除输入框轮廓线 */
input, button {
  outline: none;
}

/* 4. 图片块级化——避免底部空隙 */
img {
  display: block;
}
```

### normalize.css

除了手写重置，还可以用现成的 **normalize.css**（一个流行的 CSS Reset 库）：

```html
<link rel="stylesheet" href="./css/normalize.css">
```

它比简单重置更温和——保留了有用的默认样式，只修复浏览器差异。

### 推荐的初始化方案

```css
/* 放在你的 CSS 文件最前面 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul, ol { list-style: none; }
a { text-decoration: none; }
input, button { outline: none; }
img { display: block; }
```

> 实际项目中，通常用 normalize.css + 上面几行手写重置就够了。

## 我练习的演示页面

做了一个盒子阴影、过渡动画和 CSS 初始化的综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 属性 | 作用 | 示例 |
|------|------|------|
| `box-shadow` | 盒子阴影 | `0 4px 15px rgba(0,0,0,0.1)` |
| `transition` | 过渡动画 | `all 0.3s` |
| `transform` | 变换（配合过渡） | `translateY(-2px)`、`rotate(30deg)` |
| CSS Reset | 清除默认样式 | `* { margin:0; padding:0 }` |

**实用组合：** `box-shadow` + `transition` + `:hover` = 卡片悬浮抬升效果，现代 UI 最常见的设计 🎯
