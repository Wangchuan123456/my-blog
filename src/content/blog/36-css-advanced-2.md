---
title: 'CSS 变量 var / calc 计算 / vh 单位 / turn 旋转 / 综合案例'
description: 'CSS 自定义属性 var()、calc() 数学计算、vh 视口单位、turn 旋转单位——以及三个综合实战案例。'
pubDate: 2026-07-16
tags: ['CSS', 'var变量', 'calc', 'vh', 'turn', '综合案例']
category: '学习笔记'
order: 36
demo: '/examples/css-advanced-2/index.html'
---

## 一、CSS 变量 var()

CSS 变量（自定义属性）用 `--` 定义，用 `var()` 读取。

```css
:root {
  --primary-color: blue;
  --font-size: 20px;
}

.box {
  color: var(--primary-color);
  font-size: var(--font-size);
}
```

- `:root` 中定义的变量是**全局变量**，整个页面可用
- 在某个元素内定义的变量只在该元素及其子元素中有效

## 二、calc() 计算函数

在 CSS 中做**数学运算**：

```css
.box {
  width: calc(100% - 80px);           /* 百分比减固定值 */
  height: calc(100vh - 60px);         /* 视口高度减导航栏 */
  font-size: calc(16px + 2 * 1vw);    /* 响应式字号 */
}
```

支持运算：`+` `-` `*` `/`，运算符前后必须有空格。

## 三、vh 视口单位

`vh` 相对于**浏览器视口高度**，`100vh` = 满屏高度。

```css
.full-screen {
  height: 100vh;         /* 占满整个视口高度 */
}

.half-screen {
  height: 50vh;          /* 一半视口高度 */
}
```

## 四、turn 旋转单位

`turn` 表示**圈数**，1turn = 360deg。

```css
transform: rotate(1turn);    /* 旋转一圈（360deg） */
transform: rotate(0.5turn);  /* 半圈（180deg） */
```

用于 animation 时更直观：

```css
@keyframes spin {
  to { transform: rotate(1turn); }   /* 转一圈 */
}
```

## 五、综合案例

### 1. 动感菜单

利用 var 变量 + calc + transition 实现：

```css
:root {
  --menu-speed: 0.3s;
}
.menu-item {
  transition: transform var(--menu-speed);
}
.menu-item:hover {
  transform: translateX(calc(100% - 40px));
}
```

### 2. 滑动导航栏

```css
.nav {
  display: flex;
  gap: calc(20 * 1vw);
}
```

### 3. 炫彩工具箱

结合 filter hue-rotate 动画实现颜色循环：

```css
@keyframes color-cycle {
  to { filter: hue-rotate(360deg); }
}
.icon { animation: color-cycle 3s linear infinite; }
```

## 我练习的演示页面

做了 var、calc、vh、turn 和综合案例的演示。

点击文章上方的「🌐 在线演示」查看。
