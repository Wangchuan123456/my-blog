---
title: '表单标签 &lt;form&gt; 完全指南：输入框、单选/复选框、下拉菜单、文件上传'
description: '表单是网页收集用户输入的核心方式——从 text、password、radio、checkbox、file、textarea、select 到 button，一篇搞懂。'
pubDate: 2026-07-06
tags: ['HTML', '表单', 'form', 'input', 'select', 'textarea', 'button']
category: '学习笔记'
order: 11
demo: '/examples/form-tags/index.html'
---

## 前言

表单（`<form>`）是网页用来**收集用户输入**的容器。用户在表单里填写信息，提交后数据发送到服务器。

一个表单由三部分组成：

1. **表单容器** `<form>` — 包裹所有表单控件
2. **表单控件** — 输入框、下拉菜单、按钮等
3. **提交按钮** — 把数据发出去

下面逐个讲解各种表单控件。

## 一、表单容器 &lt;form&gt;

`<form>` 本身不显示任何东西，它是一个容器，把所有表单控件包在一起。

```html
<form action="/submit" method="post">
  <!-- 各种表单控件放在这里 -->
</form>
```

常用属性：

| 属性 | 作用 |
|------|------|
| `action` | 数据发送到的服务器地址 |
| `method` | 发送方式：`get` 或 `post` |

## 二、文本输入类

### 单行文本框 &lt;input type="text"&gt;

最常用的输入框，用于输入用户名、搜索词等短文本。

```html
<input type="text" id="username" name="username"
       placeholder="请输入账号" required autocomplete="off">
```

常用属性：

| 属性 | 作用 | 示例 |
|------|------|------|
| `placeholder` | 占位提示文字 | `placeholder="请输入账号"` |
| `required` | 必填，不填不能提交 | `required` |
| `autocomplete` | 是否自动补全 | `autocomplete="off"` |
| `maxlength` | 最大字符数 | `maxlength="20"` |
| `readonly` | 只读，不能修改 | `readonly` |
| `disabled` | 禁用，不会提交 | `disabled` |

### 密码框 &lt;input type="password"&gt;

输入的内容显示为圆点或星号，保护隐私。

```html
<input type="password" id="password" name="password"
       placeholder="请输入密码" maxlength="10" required autocomplete="off">
```

和文本框的区别就是 `type="password"`，其他属性用法一样。

### 文本域 &lt;textarea&gt;

用于输入**多行文本**，比如个人简介、留言内容。

```html
<textarea id="intro" name="intro" rows="4" cols="30">
</textarea>
```

属性：

| 属性 | 作用 |
|------|------|
| `rows` | 显示的行数（高度） |
| `cols` | 显示的列数（宽度） |

注意：`<textarea>` 是双标签，不是 `<input>` 的自闭合形式。

## 三、选择类

### 单选框 &lt;input type="radio"&gt;

从**多个选项中选择一个**。同一组 radio 的 `name` 属性值必须相同。

```html
<input type="radio" name="gender" value="male" checked> 男
<input type="radio" name="gender" value="female"> 女
```

`checked` 属性表示默认选中。

> **注意：** 同一组的 `name` 必须一样，才能实现"选一个互斥"的效果。

### 复选框 &lt;input type="checkbox"&gt;

从**多个选项中选择多个**。同一组 checkbox 的 `name` 可以相同或不同。

```html
<input type="checkbox" name="hobby" value="football"> 足球
<input type="checkbox" name="hobby" value="basketball"> 篮球
<input type="checkbox" name="hobby" value="running"> 跑步
```

### 下拉菜单 &lt;select&gt; + &lt;option&gt;

节省空间的选择方式，点击展开列表。

```html
<select name="city">
  <option value="beijing">北京</option>
  <option value="shanghai" selected>上海</option>
  <option value="guangzhou">广州</option>
</select>
```

- `<option>` 是每个选项
- `selected` 属性表示默认选中
- `value` 是提交到服务器的值

## 四、文件上传 &lt;input type="file"&gt;

让用户选择本地文件上传。

```html
<input type="file" name="file" multiple accept="image/*,video/*">
```

属性：

| 属性 | 作用 |
|------|------|
| `multiple` | 允许选择多个文件 |
| `accept` | 限制文件类型，如 `image/*`、`.pdf` |

## 五、按钮类

### &lt;button&gt; 按钮

```html
<button type="submit">提交</button>
<button type="reset">重置</button>
<button type="button" disabled>禁用按钮</button>
```

| type 值 | 作用 |
|---------|------|
| `submit` | 点击后提交表单（默认值） |
| `reset` | 重置所有表单控件到初始值 |
| `button` | 纯按钮，需配合 JavaScript 使用 |

### &lt;input type="submit"&gt;

另一种提交按钮写法，效果和 `<button type="submit">` 一样。

```html
<input type="submit" value="提交">
```

## 六、辅助标签

### &lt;label&gt; — 标签

`<label>` 让点击文字也能聚焦到对应的表单控件，提升用户体验。

```html
<label for="username">账号：</label>
<input type="text" id="username" name="username">
```

`for` 属性的值必须与表单控件的 `id` 值一致。

## 七、常用属性汇总

| 属性 | 适用控件 | 作用 |
|------|---------|------|
| `placeholder` | text / password / textarea | 占位提示文字 |
| `required` | 大部分控件 | 必填校验 |
| `maxlength` | text / password | 最大字符数 |
| `autocomplete` | text / password | 是否自动补全 |
| `checked` | radio / checkbox | 默认选中 |
| `selected` | option | 默认选中项 |
| `multiple` | file | 允许多文件 |
| `accept` | file | 限制文件类型 |
| `disabled` | 大部分控件 | 禁用，不会提交 |
| `readonly` | text / textarea | 只读，会提交 |

## 我练习的演示页面

做了一个综合注册表单演示，涵盖所有控件类型：

```
表单标签综合演示
├── 📝 单行文本框（placeholder / required / autocomplete）
├── 🔒 密码框（maxlength）
├── 🔘 单选框（radio + checked）
├── ☑️ 复选框（checkbox）
├── 📎 文件上传（multiple + accept）
├── 📄 文本域（textarea rows / cols）
├── 📋 下拉菜单（select + option + selected）
└── 🎯 按钮（submit / reset / button / disabled）
```

点击文章上方的「🌐 在线演示」查看实际效果。

## 小结

| 标签 / type | 作用 |
|-------------|------|
| `<form>` | 表单容器 |
| `<input type="text">` | 单行文本输入 |
| `<input type="password">` | 密码输入 |
| `<input type="radio">` | 单选项 |
| `<input type="checkbox">` | 多选项 |
| `<input type="file">` | 文件上传 |
| `<input type="submit">` | 提交按钮 |
| `<textarea>` | 多行文本输入 |
| `<select>` + `<option>` | 下拉选择 |
| `<button>` | 按钮（submit / reset / button） |
| `<label>` | 文字标签，提升点击体验 |

表单是前端开发中和用户交互最多的部分，掌握这些控件是基本功 🚀
