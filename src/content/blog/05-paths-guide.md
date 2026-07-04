---
title: 'HTML 路径详解：绝对路径、相对路径、什么时候用哪个？'
description: '彻底搞懂 ./  ../  /  的区别，以及图片、链接到底该怎么引用。'
pubDate: 2026-07-03
tags: ['HTML', '路径', '相对路径', '绝对路径']
category: '学习笔记'
order: 5
demo: '/examples/paths-demo/index.html'
---

## 前言

学图片标签的时候就遇到了路径问题：为什么有时候写 `src="1.jpg"` 能显示，有时候不行？为什么老师用 `../` 能跳到上一级？

这一节单独把路径拎出来讲清楚。路径搞懂了，图片、链接、CSS、JS 的引用都不会再出错。

## 什么是路径？

路径就是**告诉浏览器文件在哪里的地址**。HTML 中有三种路径写法：

| 类型 | 写法 | 例子 |
|------|------|------|
| **绝对路径** | 完整的 URL | `https://example.com/images/1.jpg` |
| **相对路径** | 相对于当前文件的位置 | `./images/1.jpg` 或 `images/1.jpg` |
| **根相对路径** | 从网站根目录开始 | `/images/1.jpg` |

## 绝对路径

绝对路径是**完整的网址**，从协议（`https://`）开始写：

```html
<img src="https://www.example.com/images/1.jpg" alt="图片">
```

**特点：**
- 在任何页面都能用，不受文件位置影响
- 缺点是如果域名换了，所有链接都要改
- 引用外部网站的资源时必须用绝对路径

## 相对路径（重点）

相对路径是**相对于当前 HTML 文件的位置**来写的。这是开发中最常用的方式。

### 同级引用：直接写文件名

如果图片和 HTML 文件在**同一个文件夹**：

```
📁 代码1/
    ├── index.html
    ├── 1.jpg
    └── 1.png
```

```html
<!-- index.html 里引用 -->
<img src="1.jpg" alt="图片">
<img src="1.png" alt="图片">
```

直接写文件名就行，或者加上 `./`（表示当前目录）：

```html
<img src="./1.jpg" alt="图片">   <!-- 和 src="1.jpg" 效果一样 -->
```

### 子目录：文件夹名/文件名

如果图片在 HTML 的**下一级文件夹**里：

```
📁 项目/
    ├── index.html
    └── 📁 images/
         ├── 1.jpg
         └── 2.png
```

```html
<!-- index.html 里引用 -->
<img src="images/1.jpg" alt="图片">
<img src="images/2.png" alt="图片">
```

### 上级目录：../

如果图片在 HTML 的**上一级文件夹**里：

```
📁 assets/
    ├── 1.jpg
    └── 2.png
📁 pages/
    └── index.html
```

```html
<!-- pages/index.html 里引用 -->
<img src="../assets/1.jpg" alt="图片">
```

`../` 表示**跳到上一级目录**。需要跳几级就写几个：

```html
<img src="../../images/1.jpg" alt="图片">  <!-- 上两级 -->
```

## 根相对路径

以 `/` 开头，表示**网站的根目录**：

```html
<img src="/images/1.jpg" alt="图片">
```

**特点：**
- `/` 就是网站的根（比如 `https://my-blog.vercel.app/`）
- 不管页面在哪一层，`/images/1.jpg` 始终指向根目录下的 images 文件夹
- 适合用在所有页面共享的资源上

## 路径对照表

| 写法 | 含义 | 示例 |
|------|------|------|
| `文件名` | 当前目录 | `1.jpg` |
| `./文件名` | 当前目录（同上） | `./1.jpg` |
| `文件夹/文件名` | 下一级目录 | `images/1.jpg` |
| `../文件名` | 上一级目录 | `../1.jpg` |
| `../../文件名` | 上两级目录 | `../../1.jpg` |
| `/文件名` | 根目录 | `/images/1.jpg` |
| `https://...` | 完整网址 | 绝对路径 |

## 我练习的页面

我写了一个 demo 来验证不同路径的写法，点击文章上方的「🌐 在线演示」查看效果。

目录结构是这样的：

```
public/examples/paths-demo/
├── index.html              ← 主页面
│
├── 📁 images/
│   └── photo.jpg           ← 子目录中的图片
│
├── 📁 about/
│   └── page.html           ← 另一页面，用 ../ 引用上级的图片
```

```html
<!-- paths-demo/index.html -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>路径演示</title>
</head>
<body>
  <h1>路径引用演示</h1>

  <h2>1. 同级引用（直接写文件名）</h2>
  <p>图片和 HTML 在同一目录下：</p>
  <img src="1.jpg" alt="同级图片" width="200">

  <h2>2. 子目录引用</h2>
  <p>图片在 images/ 文件夹里：</p>
  <img src="images/photo.jpg" alt="子目录图片" width="200">

  <h2>3. 根相对路径</h2>
  <p>从根目录开始引用：</p>
  <img src="/examples/paths-demo/images/photo.jpg" alt="根路径图片" width="200">

  <h2>4. 链接到另一个页面</h2>
  <a href="about/page.html">关于页面（用相对路径）</a>
</body>
</html>
```

## 踩坑记录

1. **`./` 和 `../` 搞混**：`./` 是当前目录，`../` 是上级目录——多一个点就是上一级
2. **根路径 `/` 在本地可能失效**：本地打开 HTML 文件时，`/images/1.jpg` 可能找不到根目录，部署到服务器后才正常
3. **路径大小写**：Windows 不区分大小写，但 Linux 服务器区分——`Image.jpg` 和 `image.jpg` 是不同文件

## 总结

搞懂路径其实就是搞懂一件事：**当前文件在哪，目标文件在哪，它们之间怎么走。**

> 记住这个口诀：
> - **同级**直接写
> - **下级**文件夹名+斜杠
> - **上级**两个点+斜杠
> - **根目录**一个斜杠开头
