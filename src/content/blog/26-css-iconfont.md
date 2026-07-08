---
title: 'CSS 字体图标：iconfont 的查找、引入与使用'
description: '字体图标是用"字体"的方式展示图标——任意缩放不失真，用 color 改颜色，从 iconfont.cn 获取到项目中使用的完整流程。'
pubDate: 2026-07-07
tags: ['CSS', '字体图标', 'iconfont', '图标']
category: '学习笔记'
order: 26
demo: '/examples/css-iconfont/index.html'
---

## 前言

**字体图标（Icon Font）** 是把图标做成"字体"——用文字的方式展示图标。

### 相比图片图标的优势

| 对比 | 图片图标 | 字体图标 |
|------|---------|---------|
| 缩放 | 放大变模糊 | **任意缩放都清晰** ✅ |
| 颜色 | 需重新切图 | **直接改 color** ✅ |
| 大小 | 需重新切图 | **直接改 font-size** ✅ |
| 加载 | 每张图一个请求 | **全部图标一个文件** ✅ |

最常用的字体图标平台：**iconfont.cn**（阿里巴巴矢量图标库）

## 一、从 iconfont.cn 获取图标

### 步骤

**1. 打开网站** → https://www.iconfont.cn

**2. 搜索图标** → 输入关键词（如"购物车"、"搜索"、"首页"）

**3. 加入购物车** → 点击图标上的购物车图标

**4. 添加至项目** → 右下角购物车 → 「添加至项目」（可新建项目）

**5. 下载至本地** → 项目页 → 「下载至本地」→ 得到一个 zip 压缩包

**6. 解压** → 放到项目目录中（如 `iconfont/` 文件夹）

解压后的目录结构：

```
iconfont/
├── iconfont.css      ← 图标样式（引入这个文件）
├── iconfont.ttf       ← 字体文件
├── iconfont.woff      ← 字体文件
├── iconfont.woff2     ← 字体文件
├── iconfont.svg       ← 字体文件
└── iconfont.json      ← 图标信息（不用管）
```

## 二、引入字体图标

### 方式一：引入 CSS 文件（推荐）

```html
<link rel="stylesheet" href="./iconfont/iconfont.css">
```

### 方式二：在 CSS 中用 @import

```css
@import url(./iconfont/iconfont.css);
```

## 三、使用字体图标

引入 CSS 后，用两个 class 来使用图标：

```html
<span class="iconfont icon-good"></span>
```

- `iconfont` — 基础类（必须加），告诉浏览器用字体图标渲染
- `icon-good` — 具体图标的类名（每个图标不同，在 iconfont.cn 上定义）

也可以用其他标签：

```html
<i class="iconfont icon-xihuan"></i>
<span class="iconfont icon-search"></span>
<div class="iconfont icon-cart"></div>
```

## 四、修改图标样式

因为字体图标本质是"文字"，所以用文字相关的 CSS 属性控制样式：

```css
.icon-good {
  font-size: 40px;      /* 大小 */
  color: red;           /* 颜色 */
  font-weight: bold;    /* 粗细 */
}

.icon-search {
  font-size: 24px;
  color: #6c63ff;
}
```

### 修改大小的几种方式

```css
/* 方式 1：单独写 class */
.icon-good { font-size: 40px; }

/* 方式 2：行内样式 */
<span class="iconfont icon-good" style="font-size: 32px; color: #e74c3c;"></span>

/* 方式 3：统一样式 */
.iconfont { font-size: 24px; }   /* 所有图标改为 24px */
```

## 五、实际应用示例

### 导航栏图标

```html
<nav>
  <ul>
    <li><i class="iconfont icon-home"></i> 首页</li>
    <li><i class="iconfont icon-search"></i> 搜索</li>
    <li><i class="iconfont icon-cart"></i> 购物车</li>
    <li><i class="iconfont icon-user"></i> 我的</li>
  </ul>
</nav>
```

```css
.iconfont { font-size: 20px; margin-right: 4px; }
```

### 按钮图标

```html
<button><i class="iconfont icon-download"></i> 下载</button>
```

## 六、注意事项

1. **`iconfont` 基础 class 必须加** — 不写的话图标不显示
2. **CSS 文件路径要正确** — `<link>` 的 `href` 路径要对，否则加载不了
3. **字体文件和 CSS 文件保持在同一目录** — `iconfont.css` 内部引用了同目录的 `ttf/woff` 文件
4. **图标类名以 iconfont.cn 上定义的为准** — 下载后可以改，但建议保留原名方便识别

> **如果图标不显示：** 检查引入路径 ✓ 检查是否有 `iconfont` class ✓ 检查字体文件是否完整 ✓

## 我练习的演示页面

做了一个字体图标的引入与效果演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

```
1. iconfont.cn 选图标 → 加入购物车 → 添加至项目 → 下载
2. 解压放到项目，引入 iconfont.css
3. 使用：<span class="iconfont icon-名称"></span>
4. 改样式：font-size 大小、color 颜色、font-weight 粗细
```

> 字体图标是**矢量**的，任意缩放都清晰——比图片图标方便太多，是现代开发的标配。
