---
title: 'CSS 盒子背景：颜色 / 图片 / 平铺 / 位置 / 尺寸 / 复合写法 / 渐变'
description: '背景是 CSS 美化盒子的核心——从 background-color 到 background 复合写法，以及 linear-gradient 渐变背景。'
pubDate: 2026-07-07
tags: ['CSS', '背景', 'background', '渐变', 'linear-gradient']
category: '学习笔记'
order: 24
demo: '/examples/css-background/index.html'
---

## 前言

背景（background）是用来装饰盒子的——设置背景颜色、背景图片、图片平铺方式、位置、尺寸等。

## 一、background-color 背景颜色

```css
background-color: pink;
background-color: #f00;
background-color: rgba(255, 0, 0, 0.3);  /* 半透明 */
```

## 二、background-image 背景图片

```css
background-image: url(./img/ldh.png);
```

- 背景图片默认会**重复平铺**填满整个盒子
- 图片路径可以是相对路径或绝对路径

## 三、background-repeat 平铺方式

控制背景图片是否重复、如何重复。

| 值 | 效果 |
|:---:|:----:|
| `repeat` | 默认，水平和垂直都平铺 |
| `no-repeat` | 不平铺，只显示一张 |
| `repeat-x` | 只在水平方向平铺 |
| `repeat-y` | 只在垂直方向平铺 |

```css
background-repeat: no-repeat;    /* 最常用 */
background-repeat: repeat-x;     /* 水平平铺 */
background-repeat: repeat-y;     /* 垂直平铺 */
```

## 四、background-position 背景位置

控制背景图片在盒子中的位置。可以给**两个值**（x y）。

### 像素值

```css
background-position: 50px 10px;   /* 距左边50px，距顶端10px */
```

### 百分比

```css
background-position: 50% 50%;     /* 居中（相当于 center center） */
```

### 方位名词

| 值 | 效果 |
|:---:|:----:|
| `left top` | 左上角（默认） |
| `center center` | 正中间 |
| `right bottom` | 右下角 |
| `center` | 只写一个，第二个默认为 center |

```css
background-position: center center;   /* 居中 */
background-position: right bottom;    /* 右下角 */
background-position: center;           /* 水平居中，垂直也居中 */
background-position: left;             /* 左对齐，垂直居中 */
```

## 五、background-size 背景尺寸

控制背景图片的大小。

| 值 | 效果 |
|:---:|:----:|
| `cover` | **覆盖**——等比缩放铺满盒子，可能被裁剪 |
| `contain` | **包含**——等比缩放完全显示，可能有留白 |
| `200px` | 宽度设为 200px，高度等比缩放 |
| `200px 100px` | 宽度 200px，高度 100px |

```css
background-size: cover;      /* 覆盖（最常用） */
background-size: contain;    /* 包含 */
background-size: 300px;      /* 指定宽度 */
```

**cover vs contain：**

```
cover：    盒子铺满，图片可能被裁掉一部分
contain：  图片完整显示，盒子可能没填满
```

## 六、background-attachment 背景固定

背景是否随页面滚动。

| 值 | 效果 |
|:---:|:----:|
| `scroll` | 默认，随页面滚动 |
| `fixed` | 固定在视口，不随页面滚动 |

```css
background-attachment: fixed;   /* 背景固定——视差滚动效果 */
```

## 七、background 复合写法（重点）

所有背景属性可以合并到一行：

```css
background: pink url(./img/ldh.png) no-repeat center center/200px;
/*          颜色    图片         平铺    位置/尺寸           */
```

### 书写顺序

```
background: color image repeat position/size attachment;
```

- 各值之间**用空格隔开**
- 顺序**不限**，习惯按上面顺序写
- 可省略不写的属性
- `position` 和 `size` 之间用 **斜杠 /** 分隔

```css
/* 完整写法 */
background: pink url(ldh.png) no-repeat center center/200px fixed;

/* 简写——只设颜色 */
background: pink;

/* 简写——只设图片 + 不平铺 + 居中 */
background: url(ldh.png) no-repeat center;
```

## 八、背景渐变 linear-gradient

线性渐变——颜色从一个方向过渡到另一个方向。

### 基本语法

```css
/* 从上到下（默认方向） */
background: linear-gradient(pink, red);

/* 指定方向 */
background: linear-gradient(to top, pink, red);
background: linear-gradient(to right, pink, red);

/* 使用角度 */
background: linear-gradient(45deg, pink, red);
background: linear-gradient(90deg, pink, red);

/* 多个颜色 */
background: linear-gradient(97deg, #0096FF, #BB64FF, #F2416B, #EB7500);
```

### 色标位置

可以控制每种颜色占据的比例：

```css
/* 粉红占 50%，红色占 50% — 两半 */
background: linear-gradient(90deg, pink 50%, red 50%);

/* 渐变按钮 */
background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
```

### 渐变文字

```css
.text {
  font-size: 30px;
  font-weight: 700;
  background-image: linear-gradient(97deg, #0096FF, #BB64FF, #F2416B, #EB7500);
  background-clip: text;              /* 背景裁剪为文字形状 */
  -webkit-text-fill-color: transparent; /* 文字变透明，露出背景 */
}
```

## 我练习的演示页面

做了一个背景属性综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 属性 | 作用 | 常用值 |
|------|------|--------|
| `background-color` | 背景颜色 | `pink`、`#f00` |
| `background-image` | 背景图片 | `url(./img.png)` |
| `background-repeat` | 平铺方式 | `no-repeat` |
| `background-position` | 位置 | `center center` |
| `background-size` | 尺寸 | `cover`、`contain` |
| `background-attachment` | 固定/滚动 | `fixed` |
| **`background`** | **复合写法** | **一行搞定** |
| `linear-gradient()` | 线性渐变 | `45deg, pink, red` |
