---
title: 'CSS 3D 变换与 animation 动画：透视 / 3D旋转 / @keyframes / 逐帧动画'
description: '3D 变换让元素有立体感，animation + @keyframes 可以创建自动播放的复杂动画——两大利器。'
pubDate: 2026-07-14
tags: ['CSS', '3D', 'transform', 'animation', 'keyframes', '动画']
category: '学习笔记'
order: 34
demo: '/examples/css-3d-animation/index.html'
---

## 前言

前面学了 2D 变换和 transition，这一篇升级到 **3D** 和 **animation 自动动画**。

## 一、3D 变换

3D 变换比 2D 多了 **Z 轴**（深度方向）。

### 透视 perspective

透视让元素产生**近大远小**的立体感。加在**父元素**上：

```css
body {
  perspective: 800px;   /* 眼睛到屏幕的距离，值越小效果越强 */
}
```

### 3D 旋转 rotateX / rotateY / rotateZ

```css
transform: rotateX(180deg);   /* 绕 X 轴翻转（上下） */
transform: rotateY(180deg);   /* 绕 Y 轴翻转（左右） */
transform: rotateZ(180deg);   /* 绕 Z 轴旋转（平面旋转，同 2D） */
```

### 3D 位移 translate3d

```css
transform: translate3d(x, y, z);
transform: translateZ(100px);   /* 朝屏幕方向移动 */
```

### 3D 变换要点

- **父元素加 `perspective`** 才有立体效果
- **保留 3D 效果**：`transform-style: preserve-3d`
- **背面可见性**：`backface-visibility: hidden`（用于翻转卡片）

### 两面翻转的图片

```css
.box {
  perspective: 800px;
}

.box img {
  transition: all .5s;
  backface-visibility: hidden;   /* 背面隐藏 */
}

.box:hover img {
  transform: rotateY(180deg);    /* 悬停翻转 */
}
```

## 二、animation 动画

`transition` 只能做"开始→结束"的简单过渡。`animation` 可以定义**多阶段复杂动画**。

### 1. 定义动画（@keyframes）

```css
@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(400px, 0);
  }
}
```

也可以用 `from` / `to` 简化：

```css
@keyframes move {
  from { transform: translate(0, 0); }
  to { transform: translate(400px, 0); border-radius: 50%; }
}
```

### 2. 使用动画

```css
.box {
  animation: move 2s;
  /*          ↑名称  ↑时长 */
}
```

### 完整写法

```css
.box {
  animation: move 2s ease 0s infinite alternate;
  /*          ↑名称 ↑时长 ↑曲线 ↑延迟 ↑次数 ↑方向 */
}
```

各值含义：

| 值 | 含义 | 示例 |
|:---:|------|------|
| name | 动画名称 | `move` |
| duration | 动画时长 | `2s` |
| timing-function | 速度曲线 | `ease`、`linear` |
| delay | 延迟 | `0s` |
| iteration-count | 播放次数 | `1`、`infinite`（无限） |
| direction | 播放方向 | `normal`、`alternate`（来回） |
| fill-mode | 结束状态 | `none`、`forwards`（保持最后） |

### 逐帧动画

用 `steps()` 实现不连续播放，适合逐帧精灵图效果：

```css
.box {
  animation: run 1s steps(8) infinite;
}
```

### 综合案例：流光渐变边框按钮

```css
@keyframes flow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.btn {
  background: linear-gradient(90deg, gold, #ff6b6b, gold) 0 0 / 200% 100%;
  animation: flow 3s linear infinite;
}
```

## 我练习的演示页面

做了一个 3D 变换和 animation 动画的综合演示。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 技术 | 关键属性 | 适用场景 |
|:----|:---------|---------|
| 3D 旋转 | `rotateX/Y/Z` + `perspective` | 立体翻转、3D 卡片 |
| 3D 位移 | `translateZ` | 景深效果 |
| animation | `@keyframes` + `animation` | 自动播放的复杂动画 |
| 逐帧动画 | `steps(n)` | 精灵图动画、打字效果 |
