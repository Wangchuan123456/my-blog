---
title: '表格标签 &lt;table&gt; 完全指南：基础表格 + 合并单元格 colspan / rowspan'
description: '从 table、tr、th、td 到 colspan 跨列合并、rowspan 跨行合并，一篇搞懂 HTML 表格的所有核心用法。'
pubDate: 2026-07-05
tags: ['HTML', '表格', 'table', 'colspan', 'rowspan', '合并单元格']
category: '学习笔记'
order: 10
demo: '/examples/table-tags/index.html'
---

## 前言

表格在网页中用来展示**二维数据**——有行有列，比如成绩单、价目表、排班表。

HTML 表格由一组标签配合搭建，核心标签有：

| 标签 | 含义 |
|------|------|
| `<table>` | 表格容器 |
| `<tr>` | 行（Table Row） |
| `<th>` | 表头单元格（Table Header），加粗居中 |
| `<td>` | 普通单元格（Table Data） |
| `<thead>` | 表格头部区域 |
| `<tbody>` | 表格主体区域 |
| `<tfoot>` | 表格底部区域 |

下面从基础到合并单元格，逐个来看。

## 一、基础表格

最简单的表格结构：`<table>` → `<tr>`（行）→ `<th>` / `<td>`（单元格）。

```html
<table border="1">
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>性别</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>18</td>
    <td>男</td>
  </tr>
  <tr>
    <td>李四</td>
    <td>20</td>
    <td>女</td>
  </tr>
</table>
```

浏览器效果：

| 姓名 | 年龄 | 性别 |
|------|:----:|:----:|
| 张三 | 18 | 男 |
| 李四 | 20 | 女 |

### &lt;thead&gt; / &lt;tbody&gt; / &lt;tfoot&gt;

更好的写法是用 `<thead>`、`<tbody>`、`<tfoot>` 把表格分区，结构更清晰：

```html
<table border="1">
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>18</td>
      <td>男</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>20</td>
      <td>女</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">共 2 人</td>
    </tr>
  </tfoot>
</table>
```

这三个分区标签不影响显示，但让代码更有条理，也方便后期用 CSS 分区设置样式。

## 二、合并单元格

实际表格经常需要**跨列**或**跨行**合并单元格，用 `colspan` 和 `rowspan` 属性实现。

### colspan — 跨列合并（水平合并）

一个单元格横向占据**多列**。

```html
<table border="1">
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>性别</th>
  </tr>
  <tr>
    <td>张三</td>
    <td>18</td>
    <td>男</td>
  </tr>
  <tr>
    <!-- 这一格占了 3 列 -->
    <td colspan="3">李四的信息合并到一格显示</td>
  </tr>
</table>
```

效果：

| 姓名 | 年龄 | 性别 |
|------|:----:|:----:|
| 张三 | 18 | 男 |
| 李四的信息合并到一格显示 | ← colspan="3" |

### rowspan — 跨行合并（垂直合并）

一个单元格纵向占据**多行**。

```html
<table border="1">
  <tr>
    <th>姓名</th>
    <th>年龄</th>
    <th>性别</th>
  </tr>
  <tr>
    <!-- 这一格占了 2 行 -->
    <td rowspan="2">张三</td>
    <td>18</td>
    <td>男</td>
  </tr>
  <tr>
    <!-- 第一列被 rowspan 占了，这行只要两列 -->
    <td>19</td>
    <td>男</td>
  </tr>
</table>
```

效果：

| 姓名 | 年龄 | 性别 |
|------|:----:|:----:|
| 张三 | 18 | 男 |
| (合并) | 19 | 男 |

注意：使用 `rowspan` 后，被合并的下一行要**少写一个单元格**（因为被上一行的单元格占了位置）。

### colspan + rowspan 综合案例

一个成绩汇总表，同时用到两种合并：

```html
<table border="1">
  <thead>
    <tr>
      <th>姓名</th>
      <th>科目</th>
      <th>成绩</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">张三</td>
      <td>语文</td>
      <td>90</td>
      <td rowspan="4">全部及格</td>
    </tr>
    <tr>
      <td>数学</td>
      <td>85</td>
    </tr>
    <tr>
      <td rowspan="2">李四</td>
      <td>语文</td>
      <td>88</td>
    </tr>
    <tr>
      <td>数学</td>
      <td>92</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4" style="text-align: center;">成绩汇总表</td>
    </tr>
  </tfoot>
</table>
```

效果：

| 姓名 | 科目 | 成绩 | 备注 |
|------|:----:|:----:|:----:|
| 张三 | 语文 | 90 | 全部及格 |
| (合并) | 数学 | 85 | (合并) |
| 李四 | 语文 | 88 | (合并) |
| (合并) | 数学 | 92 | (合并) |
| colspan="4" → 成绩汇总表 |

### 合并单元格的记忆技巧

> **colspan** → **col**umn（列）→ 水平方向往右跨列
>
> **rowspan** → **row**（行）→ 垂直方向往下跨行

## 三、我练习的演示页面

做了一个综合表格演示页面，包含基础表格 + colspan + rowspan + 综合案例：

```
表格标签综合演示
├── 📋 基础表格（thead / tbody / tfoot）
├── 🔗 colspan 跨列合并
├── 📐 rowspan 跨行合并
└── 🎯 colspan + rowspan 综合案例（成绩汇总表）
```

点击文章上方的「🌐 在线演示」查看。

## 小结

| 标签 / 属性 | 作用 | 示例 |
|-------------|------|------|
| `<table>` | 表格容器 | `<table border="1">` |
| `<tr>` | 行 | `<tr><td>...</td></tr>` |
| `<th>` | 表头单元格（加粗居中） | `<th>姓名</th>` |
| `<td>` | 普通单元格 | `<td>张三</td>` |
| `<thead>` | 表头分区 | 方便样式分组 |
| `<tbody>` | 主体分区 | 方便样式分组 |
| `<tfoot>` | 底部分区 | 方便样式分组 |
| `colspan` | 跨列合并 | `<td colspan="3">` |
| `rowspan` | 跨行合并 | `<td rowspan="2">` |

**使用 colspan/rowspan 的要点：**
- `colspan` 往右合并，被合并的列少写 `<td>`
- `rowspan` 往下合并，被合并的行少写 `<td>`
- 两种可以同时使用，画个草图辅助理解最稳妥
