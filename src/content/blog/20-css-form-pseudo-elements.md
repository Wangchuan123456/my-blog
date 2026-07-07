---
title: 'CSS 表单伪类 :disabled :checked 与伪元素 ::before ::after ::placeholder'
description: '表单伪类控制表单元素的不同状态；伪元素能在页面中插入"不存在"的元素——::before、::after、::placeholder 等。'
pubDate: 2026-07-07
tags: ['CSS', '表单伪类', '伪元素', 'disabled', 'checked', 'before', 'after', 'placeholder']
category: '学习笔记'
order: 20
demo: '/examples/css-form-pseudo-elements/index.html'
---

## 前言

这一篇讲两类选择器：

1. **表单伪类** — 根据表单元素的状态来选中（禁用、选中）
2. **伪元素** — 选中元素中的"部分内容"或"不存在的位置"（首行、首字母、占位符、before/after）

## 一、表单伪类选择器

### :disabled — 禁用状态

当表单元素设置了 `disabled` 属性时，用 `:disabled` 选中它。

```css
button:disabled {
  opacity: .4;       /* 半透明，看起来是"灰掉"的效果 */
  cursor: not-allowed;  /* 鼠标变禁止图标 */
}
```

```html
<button disabled>注册</button>     <!-- ✅ 被 :disabled 选中，半透明 -->
<button>提交</button>              <!-- ❌ 正常按钮，不变 -->
```

常用于：提交按钮在未满足条件时置灰。

### :checked — 选中状态

当单选框或复选框被**勾选**时触发。

```css
input:checked + label {
  color: #ff6900;
  font-weight: bold;
}
```

```html
<input type="checkbox" id="agree">
<label for="agree">同意注册协议</label>
```

勾选复选框 → 后面的 label 文字变橙色。

这里 `+` 是**邻接兄弟选择器**，选中 checkbox 后面紧跟着的 label。

### 表单伪类汇总

| 伪类 | 触发时机 | 适用元素 |
|------|---------|---------|
| `:focus` | 获得焦点 | input、textarea、select |
| `:disabled` | 禁用状态 | 有 disabled 属性的表单元素 |
| `:checked` | 被勾选 | radio、checkbox |
| `:required` | 必填字段 | 有 required 属性的元素 |

## 二、伪元素选择器

伪元素（Pseudo-element）用双冒号 `::` 表示，它们选中的是**元素中的一部分**或**不存在于 HTML 中的位置**。

### ::first-line — 首行

选中块级元素中的**第一行文字**（会根据浏览器宽度自动适应）：

```css
p::first-line {
  color: #ff6900;
}
```

> 注意：`::first-line` 只对块级元素有效。

### ::first-letter — 首字母

选中块级元素中的**第一个字符**：

```css
p::first-letter {
  color: red;
  font-size: 28px;
}
```

效果类似报纸文章的首字母放大。

### ::placeholder — 占位文本

选中输入框的 `placeholder` 提示文字，改变其样式：

```css
textarea::placeholder {
  color: red;
  font-size: 12px;
}
```

```html
<textarea placeholder="请您留言"></textarea>
```

> 不同浏览器可能需要加前缀：`input::placeholder`、`input::-webkit-input-placeholder`

### ::before 和 ::after — 插入内容

最强大的伪元素！在元素的前面或后面**插入额外内容**，内容由 `content` 属性指定。

```css
div::before {
  content: '我是';
  color: red;
}

div::after {
  content: '老师';
  color: red;
}
```

```html
<div class="box">pink</div>
```

页面实际显示：**我是**pink**老师**

#### ::before / ::after 的特点

| 项目 | 说明 |
|------|------|
| 作用 | 在元素内容前后插入新内容 |
| 必填属性 | `content` — 没有这个属性，伪元素不显示 |
| 显示位置 | `::before` 在元素内容之前，`::after` 在元素内容之后 |
| 默认类型 | **行内元素**（如需宽高要设 `display: block`） |
| 常用场景 | 图标、装饰线、气泡、清除浮动 |

#### 实际应用：装饰图标

```css
.title::before {
  content: '🔥';
  margin-right: 5px;
}

.title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: #6c63ff;
  margin-top: 5px;
}
```

## 三、伪类 vs 伪元素

| 对比 | 伪类 | 伪元素 |
|------|------|--------|
| 符号 | **单冒号** `:` | **双冒号** `::` |
| 含义 | 元素的**状态** | 元素的**部分**或**虚拟位置** |
| 示例 | `:hover`、`:disabled` | `::before`、`::first-line` |
| 操作 | 不能插入新内容 | `::before/::after` 可以插入内容 |

> 历史原因：旧版 CSS 中伪元素也用单冒号（如 `:before`），现在统一推荐用双冒号 `::` 区分。

## 我练习的演示页面

做了一个表单伪类和伪元素的综合演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

**表单伪类：**

| 伪类 | 作用 |
|------|------|
| `:disabled` | 禁用状态的表单元素 |
| `:checked` | 被勾选的 radio/checkbox |
| `:focus` | 获得焦点的表单元素 |

**伪元素：**

| 伪元素 | 作用 |
|--------|------|
| `::first-line` | 块级元素的第一行 |
| `::first-letter` | 块级元素的首字母 |
| `::placeholder` | 输入框占位文本 |
| `::before` | 元素内容前插入内容 |
| `::after` | 元素内容后插入内容 |

> **提示：** `::before` 和 `::after` 的 `content` 属性是**必须的**，没有它伪元素就不会显示。即使不需要文字，也要写 `content: ''`。
