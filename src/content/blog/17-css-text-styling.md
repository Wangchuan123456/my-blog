---
title: 'CSS 字体样式与文本布局：color / font-size / text-align / line-height 等'
description: '网页中文字样式是最基本的——字体颜色大小粗细、对齐缩进行高间距，一篇搞懂所有文字相关 CSS 属性。'
pubDate: 2026-07-07
tags: ['CSS', '字体', '文本', 'color', 'font-size', 'text-align', 'line-height']
category: '学习笔记'
order: 17
demo: '/examples/css-text-styling/index.html'
---

## 前言

网页的主要内容是文字，控制文字的样式是 CSS 最基本的技能。

文字样式分为两大类：

| 类别 | 作用 | 典型属性 |
|------|------|---------|
| **字体样式** | 文字本身的样子 | `color` `font-size` `font-weight` `font-family` |
| **文本布局** | 文字排列的方式 | `text-align` `text-indent` `line-height` `letter-spacing` |

下面逐个来看。

## 一、字体颜色 color

设置文字颜色，有四种写法：

```css
/* 1. 颜色名称 */
color: pink;

/* 2. 十六进制（最常用） */
color: #2CB5A5;
color: #f00;       /* 简写，等价于 #ff0000 */

/* 3. rgb 函数 */
color: rgb(255, 0, 0);

/* 4. rgba（带透明度） */
color: rgba(255, 0, 0, 0.5);  /* 最后一位 0~1，0 全透明 */
```

**推荐用十六进制**，简写方便、浏览器解析快。

## 二、字体大小 font-size

```css
font-size: 12px;
font-size: 14px;
font-size: 16px;   /* 浏览器默认大小 */
```

- 单位是 `px`（像素）
- 浏览器默认字体大小是 **16px**
- 标题（h1~h6）有默认字号，越大越粗

## 三、字体粗细 font-weight

```css
font-weight: normal;  /* 正常 400（默认） */
font-weight: bold;    /* 加粗 700 */
font-weight: 400;     /* 数字写法，等价于 normal */
font-weight: 700;     /* 数字写法，等价于 bold */
```

**推荐用数字**（400 / 700），更精确，也方便记忆。

## 四、字体样式 font-style

```css
font-style: normal;   /* 正常（默认） */
font-style: italic;   /* 斜体 */
```

通常用于让 `<em>` 或 `<i>` 标签**取消斜体**（恢复为 normal）。

## 五、字体族 font-family

设置字体，可以写多个备选：

```css
font-family: "宋体";
font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
```

- 字体名含中文或空格时加引号
- 写多个值表示**备选**——第一个没有就依次往后用
- 最后通常加一个通用字体族（如 `sans-serif`）

## 六、文本装饰 text-decoration

```css
text-decoration: none;          /* 去掉下划线（最常用，给 a 标签用） */
text-decoration: underline;     /* 下划线 */
text-decoration: overline;      /* 上划线 */
text-decoration: line-through;  /* 删除线 */
```

最常见的用途：**去掉 `<a>` 链接的下划线**。

```css
a {
  text-decoration: none;
}
```

## 七、文本对齐 text-align

设置**块级元素**内文本的水平对齐方式：

```css
text-align: left;     /* 左对齐（默认） */
text-align: right;    /* 右对齐 */
text-align: center;   /* 居中对齐 */
text-align: justify;  /* 两端对齐（英文报纸效果） */
```

> 注意：`text-align` 对块级元素有效，对行内元素无效。

## 八、文本缩进 text-indent

首行缩进，中文文章常用：

```css
/* 固定像素缩进 */
text-indent: 20px;

/* em 缩进——相对字号，2em 缩进两个字（最常用） */
text-indent: 2em;
```

**`em` 是相对单位**，1em = 当前字号。`2em` = 缩进两个汉字的宽度，推荐这种方式。

## 九、行高 line-height

控制行与行之间的垂直间距：

```css
line-height: 26px;   /* 固定值 */
line-height: 1.5;    /* 相对值，1.5 倍字号（推荐） */
line-height: 50px;   /* 和容器高度一样 → 单行文本垂直居中 */
```

### 单行文本垂直居中技巧

```css
.box {
  height: 50px;
  line-height: 50px;   /* 行高 = 容器高度，文字自动垂直居中 */
}
```

原理：行高决定了文字在行内所占的垂直空间，当行高等于容器高度时，文字就居中了。

## 十、字间距 letter-spacing

```css
letter-spacing: 2px;   /* 每个字符之间加间距 */
letter-spacing: -1px;  /* 字符之间收缩 */
```

## 十一、font 简写属性

可以把多个字体属性合并到一行：

```css
/* 完整写法 */
font: italic 700 18px/1.5 "宋体";

/* 拆开看 */
/*   ↑斜体 ↑粗细 ↑字号/行高 ↑字体族   */
```

**严格的书写顺序：**

```
font: font-style font-weight font-size/line-height font-family;
```

必填的是 `font-size` 和 `font-family`，其他可选。

## 十二、CSS 继承性

有些 CSS 属性会自动**继承**给子元素：

```css
body {
  color: red;
  font-size: 25px;
  text-align: right;
}
```

子元素（如 `<p>`）会自动继承 `color`、`font-size`、`text-align`，不需要再写一遍。

**常见可继承属性：** `color`、`font-*`、`text-*`（部分）、`line-height`

## 我练习的演示页面

做了一个文字样式综合演示页，涵盖以上所有属性效果。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 属性 | 作用 | 常用值 |
|------|------|--------|
| `color` | 文字颜色 | `#2CB5A5`、`red`、`rgb()` |
| `font-size` | 文字大小 | `16px`、`14px` |
| `font-weight` | 文字粗细 | `400`、`700`、`bold` |
| `font-style` | 斜体 | `normal`、`italic` |
| `font-family` | 字体 | `"宋体"`、`sans-serif` |
| `text-decoration` | 装饰线 | `none`、`underline` |
| `text-align` | 水平对齐 | `center`、`left`、`justify` |
| `text-indent` | 首行缩进 | `2em` |
| `line-height` | 行高 | `1.5`、`26px` |
| `letter-spacing` | 字间距 | `2px` |
| `font` | 简写 | `italic 700 16px/1.5 "宋体"` |
