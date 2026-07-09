---
title: 'CSS 盒子模型：边框 / border-radius / 内边距 / 外边距 / 合并塌陷 / box-sizing'
description: '盒子模型是 CSS 布局的基石——从内到外：内容 → padding → border → margin，以及圆角、外边距合并、box-sizing。'
pubDate: 2026-07-08
tags: ['CSS', '盒子模型', 'border', 'padding', 'margin', 'border-radius', 'box-sizing']
category: '学习笔记'
order: 23
demo: '/examples/css-box-model/index.html'
---

## 前言

CSS 把每一个 HTML 元素都看作一个**矩形盒子**。这个盒子由内到外分为四层：

```
┌──────────────────────────────────┐
│          margin（外边距）         │
│  ┌────────────────────────────┐  │
│  │      border（边框）         │  │
│  │  ┌──────────────────────┐  │  │
│  │  │   padding（内边距）   │  │  │
│  │  │  ┌────────────────┐  │  │  │
│  │  │  │   content      │  │  │  │
│  │  │  │   （内容区域）   │  │  │  │
│  │  │  └────────────────┘  │  │  │
│  │  └──────────────────────┘  │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

从内到外：**content → padding → border → margin**

## 一、边框 border

### 简写

```css
border: 1px solid red;
/*      ↑粗细  ↑样式  ↑颜色  */
```

三个值：**边框粗细**、**边框样式**、**边框颜色**。顺序不限。

### 边框样式

| 值 | 效果 |
|:---:|:----:|
| `solid` | 实线 |
| `dashed` | 虚线 |
| `dotted` | 点线 |

### 单独设置各边

```css
border-top: 2px solid red;
border-bottom: 3px dotted green;
border-left: 4px dashed blue;
border-right: 5px solid pink;
```

### 实际应用：顶部边框

```css
.title {
  border: 1px solid #d9e0ee;       /* 先统一设细边框 */
  border-top: 3px solid #ff8400;    /* 再单独覆盖顶边为粗橙色 */
}
```

效果：顶部一条橙色粗线，其余三边灰色细线 — 常见于卡片标题。

## 二、圆角 border-radius

让盒子的角变圆。

```css
/* 四个角统一 */
border-radius: 10px;

/* 圆形（正方形用 50%） */
border-radius: 50%;

/* 胶囊按钮（高度的一半） */
border-radius: 20px;  /* height=40px 时 */
```

### 1~4 个值

| 值的个数 | 含义 | 示例 |
|:--------:|------|------|
| 1 个 | 四个角相同 | `border-radius: 10px` |
| 2 个 | 左上右下 / 右上左下 | `border-radius: 10px 30px` |
| 3 个 | 左上 / 右上左下 / 右下 | `border-radius: 10px 30px 50px` |
| 4 个 | 左上 / 右上 / 右下 / 左下 | `border-radius: 10px 30px 50px 70px` |

### 常见形状

```css
/* 圆形 */
.square {
  width: 100px; height: 100px;
  border-radius: 50%;
}

/* 胶囊按钮 */
.btn {
  width: 200px; height: 40px;
  border-radius: 20px;      /* height 的一半 */
}

/* 圆角卡片 */
.card {
  border-radius: 8px;
}
```

## 三、内边距 padding

内容与边框之间的**内部间距**。

### 1~4 个值

| 值的个数 | 含义 | 示例 |
|:--------:|------|------|
| 1 个 | 上下左右 | `padding: 10px` |
| 2 个 | 上下 / 左右 | `padding: 10px 20px` |
| 3 个 | 上 / 左右 / 下 | `padding: 10px 20px 30px` |
| 4 个 | 上 / 右 / 下 / 左（顺时针） | `padding: 10px 20px 30px 40px` |

### 单独设置

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

### padding 影响盒子大小

> **注意：** padding 会撑大盒子！设置了 `width: 200px` 再加 `padding: 20px`，实际宽度变成 **240px**。

解决方案：用 `box-sizing: border-box`（见第七节）。

## 四、外边距 margin

盒子与盒子之间的**外部间距**。

### 用法同 padding

```css
margin: 10px;              /* 四周 */
margin: 10px 20px;         /* 上下 / 左右 */
margin: 10px 20px 30px;    /* 上 / 左右 / 下 */
margin: 10px 20px 30px 40px;

margin-top: 10px;
margin-bottom: 10px;
```

### 块级盒子水平居中

```css
.center {
  width: 1000px;
  margin: 0 auto;    /* 左右 auto → 水平居中 */
}
```

### 行内盒子的特点

```css
span {
  width: 100px;        /* ❌ 行内盒子宽高无效 */
  height: 100px;       /* ❌ */
  margin-top: 10px;    /* ❌ 上下外边距无效 */
  margin-bottom: 10px; /* ❌ */
  margin-left: 10px;   /* ✅ 左右外边距有效 */
  margin-right: 10px;  /* ✅ */
}
```

## 五、外边距合并

**垂直方向**上，相邻两个块级元素的外边距会**合并**，取最大值。

```css
.box1 { margin-bottom: 100px; }
.box2 { margin-top: 150px; }
/* 实际间距 = max(100px, 150px) = 150px，不是 250px */
```

> **只发生在垂直方向**，水平方向不会合并。

## 六、外边距塌陷

父元素和第一个/最后一个子元素之间，子元素的 `margin-top` 会"穿透"到父元素身上。

```html
<div class="father">
  <div class="son"></div>
</div>
```

```css
.father { /* 没有 border 和 padding */ }
.son { margin-top: 20px; }
/* ❌ 父元素会带着子元素一起往下掉 20px */
```

### 三种解决方案

```css
/* 方法 1：父元素加 overflow: hidden（最推荐） */
.father { overflow: hidden; }

/* 方法 2：父元素加边框 */
.father { border: 1px solid transparent; }

/* 方法 3：父元素加 padding */
.father { padding-top: 1px; }
```

> 方法 1 最常用，不影响布局。

## 七、box-sizing — 盒子尺寸计算

默认情况下（`content-box`），`padding` 和 `border` 会**撑大盒子**——设置的 `width` 只是内容的宽度，不是实际可见宽度。

### content-box（默认值）

```css
.box1 {
  width: 140px;
  padding: 20px;
  border: 10px solid red;
  box-sizing: content-box;   /* 这是默认值，不写也一样 */
}
```

实际宽度计算：

```
width          = 140px  （内容区域）
+ padding-left + padding-right = 20px + 20px = 40px
+ border-left + border-right   = 10px + 10px = 20px
──────────────────────────────────────────────
实际可见宽度    = 200px
```

**你设了 140px，实际却占了 200px。** 这就是"padding 和 border 撑大盒子"。

### border-box（推荐）

```css
.box2 {
  width: 200px;
  padding: 20px;
  border: 10px solid red;
  box-sizing: border-box;    /* padding+border 向内挤 */
}
```

实际宽度计算：

```
width          = 200px  （这是最终可见宽度）
- border-left + border-right   = 10px + 10px = 20px
- padding-left + padding-right = 20px + 20px = 40px
──────────────────────────────────────────────
内容区域实际可用    = 140px
```

**设 200px 就是 200px，padding 和 border 向内挤内容区域。**

### 两种模式对比

| 对比 | content-box（默认） | border-box ✅ |
|------|:---:|:---:|
| `width` 的含义 | 内容区域宽度 | **最终可见宽度** |
| 设 width=200 + padding=20 | 实际宽 240px | 实际宽 200px |
| 布局是否容易控制 | ❌ 需要手动加减 | ✅ 所见即所得 |
| 推荐使用 | ❌ | ✅ **推荐** |

### 推荐：全局设置

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;   /* 所有盒子统一用 border-box */
}
```

> **项目中几乎都这样设。** 一行代码，所有盒子变成"所见即所得"——写多少就是多少，不用操心 padding 和 border 撑大盒子。

## 我练习的演示页面

做了一个盒子模型综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 属性 | 作用 | 常用值 |
|------|------|--------|
| `border` | 边框 | `1px solid red` |
| `border-radius` | 圆角 | `8px`、`50%` |
| `padding` | 内边距 | `10px 20px` |
| `margin` | 外边距 | `0 auto`（居中） |
| `box-sizing` | 盒子计算 | `border-box`（推荐） |

**外边距合并：** 垂直相邻取最大值
**外边距塌陷：** 父元素加 `overflow: hidden`
**推荐全局设置：** `* { box-sizing: border-box; }`
