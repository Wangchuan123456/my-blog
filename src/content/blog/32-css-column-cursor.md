---
title: 'CSS 多栏布局 column 与鼠标样式 cursor'
description: 'column-count 把内容分成多栏（类似报纸排版），cursor 控制鼠标指针样式——两个实用小知识点。'
pubDate: 2026-07-12
tags: ['CSS', '多栏布局', 'column', 'cursor', '鼠标样式']
category: '学习笔记'
order: 32
demo: '/examples/css-column-cursor/index.html'
---

## 前言

这一篇讲两个小知识点：

1. **多栏布局（column）** — 把内容像报纸一样分成多栏
2. **鼠标样式（cursor）** — 控制鼠标指针的形状

## 一、多栏布局 column

把块级内容分成多栏排列，类似报纸排版。

```css
.box {
  column-count: 5;          /* 分成 5 栏 */
  column-gap: 20px;         /* 栏间距 */
  column-rule: 1px dashed red;  /* 栏分割线 */
}
```

### 常用属性

| 属性 | 作用 | 示例 |
|------|------|------|
| `column-count` | 分成几栏 | `column-count: 5` |
| `column-gap` | 栏间距 | `column-gap: 20px` |
| `column-rule` | 栏分割线样式 | `column-rule: 1px dashed red` |
| `break-inside` | 防止项目被切割断开 | `break-inside: avoid-column` |

### 防止内容被切割

多栏布局中，一个盒子可能被"腰斩"成两半，用 `break-inside` 防止：

```css
.item {
  break-inside: avoid-column;       /* 禁止栏内断开 */
  -webkit-column-break-inside: avoid;  /* WebKit 内核兼容 */
}
```

## 二、鼠标样式 cursor

`cursor` 属性改变鼠标指针的形状。

### 常用值

| 值 | 效果 | 适用场景 |
|:---:|:----:|---------|
| `default` | 默认箭头 | 普通文字 |
| `pointer` | 手型 | **可点击元素**（链接、按钮） |
| `text` | I 型竖线 | 文本输入区域 |
| `wait` | 等待/沙漏 | 加载中 |
| `help` | 带问号箭头 | 需要帮助的提示 |
| `not-allowed` | 禁止圆圈 | **禁用按钮** |
| `grab` | 抓取手型 | 可拖拽元素 |
| `move` | 十字箭头 | 可移动元素 |

```css
/* 禁用按钮 */
button:disabled {
  cursor: not-allowed;
}

/* 可拖拽区域 */
.draggable {
  cursor: grab;
}

/* 加载状态 */
.loading {
  cursor: wait;
}
```

## 我练习的演示页面

做了一个多栏布局和鼠标样式的综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

**多栏布局：** 用 `column-count` 分栏，`column-rule` 加分割线，`break-inside: avoid-column` 防切割。

**鼠标样式：** 最常用的是 `pointer`（手型）和 `not-allowed`（禁用），记住这两个就够了，其他用时查表。
