---
title: 'CSS 2D 变换 transform：位移 translate / 旋转 rotate / 缩放 scale / 斜切 skew'
description: 'transform 可以改变元素的形状和位置——平移、旋转、缩放、斜切，搭配 transition 实现平滑动效。'
pubDate: 2026-07-13
tags: ['CSS', 'transform', '2D变换', '位移', '旋转', '缩放', '斜切']
category: '学习笔记'
order: 33
demo: '/examples/css-transform-2d/index.html'
---

## 前言

`transform`（变换）用来改变元素的**形状和位置**——移动、旋转、缩放、斜切。它不会影响其他元素的位置（不会触发回流）。

搭配 `transition` 就可以实现平滑的动画效果。

## 一、位移 translate

```css
transform: translate(100px, 100px);     /* X 和 Y 同时移动 */
transform: translateX(100px);           /* 水平移动 */
transform: translateY(100px);           /* 垂直移动 */
```

- 正值：向右/向下；负值：向左/向上
- 可以用百分比：`translateX(50%)` 相对于自身宽度的一半

```css
.box:hover {
  transform: translateY(100px);   /* 鼠标悬停时下移 100px */
}
```

## 二、旋转 rotate

```css
transform: rotate(45deg);     /* 顺时针 45 度 */
transform: rotate(-45deg);    /* 逆时针 45 度 */
```

```css
.box:hover {
  transform: rotate(360deg);   /* 悬停旋转一圈 */
}
```

## 三、缩放 scale

```css
transform: scale(1.5);        /* 放大 1.5 倍 */
transform: scale(0.5);        /* 缩小到一半 */
transform: scale(1.2, 1.5);   /* 宽放大 1.2 倍，高放大 1.5 倍 */
```

```css
.box:hover {
  transform: scale(1.1);      /* 悬停放大 1.1 倍 */
}
```

## 四、斜切 skew

```css
transform: skew(10deg);       /* 水平斜切 10 度 */
transform: skew(10deg, 5deg); /* 水平和垂直斜切 */
```

## 五、组合变换

多个变换**写在一行**：

```css
transform: translateX(200px) rotate(360deg) scale(1.2);
```

注意顺序会影响结果——写在前面的先执行。

## 六、实战：汽车滚动效果

让汽车图片在页面上水平移动，同时车轮旋转：

```html
<div class="car">
  <img src="car.png" alt="">
  <img src="wheel.png" class="wheel" alt="">
</div>
```

```css
.car {
  animation: run 3s linear infinite;
}
.wheel {
  animation: spin 1s linear infinite;
}

@keyframes run {
  100% { transform: translateX(500px); }
}
@keyframes spin {
  100% { transform: rotate(360deg); }
}
```

## 我练习的演示页面

做了一个 2D 变换综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 函数 | 作用 | 示例 |
|:----:|:----|:----:|
| `translate(x, y)` | 位移 | `translate(100px, 50px)` |
| `rotate(deg)` | 旋转 | `rotate(45deg)` |
| `scale(n)` | 缩放 | `scale(1.5)` |
| `skew(deg)` | 斜切 | `skew(10deg)` |

> 搭配 `transition: all 0.3s` 使用，实现平滑过渡效果。
