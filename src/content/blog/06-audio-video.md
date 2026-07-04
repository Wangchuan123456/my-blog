---
title: '音视频标签 &lt;audio&gt; 和 &lt;video&gt;：让页面动起来'
description: '学习 HTML5 的音视频标签，掌握 controls、autoplay、loop、muted、poster 等常用属性。'
pubDate: 2026-07-03
tags: ['HTML', 'audio', 'video', '多媒体']
category: '学习笔记'
order: 6
demo: '/examples/音视频标签/index.html'
---

## 前言

学完图片标签之后，下一步就是让页面"有声音、有动态画面"。HTML5 提供了 `<audio>` 和 `<video>` 标签，不需要 Flash 插件就能直接在浏览器里播放音视频。

## 视频标签 `<video>`

基本用法：

```html
<video src="./media/test1.mp4" width="600" controls></video>
```

### 常用属性

| 属性 | 作用 |
|------|------|
| `src` | 视频文件路径 |
| `width` / `height` | 视频宽高 |
| `controls` | 显示播放控件（进度条、音量、暂停/播放） |
| `autoplay` | 自动播放 |
| `muted` | 静音播放 |
| `loop` | 循环播放 |
| `poster` | 视频封面（播放前显示的图片） |

### autoplay 的特殊规则

老师强调了一个重要的点：**浏览器不允许带声音的视频自动播放**。如果想要自动播放，必须同时加上 `muted` 属性：

```html
<!-- ✅ 正确：静音自动播放 -->
<video src="./media/test1.mp4" controls autoplay muted></video>

<!-- ❌ 错误：不带 muted 的 autoplay 不会生效 -->
<video src="./media/test1.mp4" controls autoplay></video>
```

> 这是因为浏览器为了避免在用户没有准备的情况下突然播放声音打扰用户，所以限制了有声自动播放。后续可以用 JavaScript 实现用户交互后再开启声音播放。

### loop 和 autoplay 的顺序

老师提到：**`loop` 属性必须添加在 `autoplay` 属性后面**（虽然浏览器不一定强求，但养成好习惯）。

### poster 属性：视频封面

```html
<video src="./media/test1.mp4" controls poster="./img/test1.png"></video>
```

`poster` 指定的图片会在视频加载完成前显示，相当于视频的"封面图"。

### 兼容性写法

```html
<video src="./media/test1.mp4" width="600" controls>
  <source src="./media/test1.mp4" type="video/mp4">
  <p>您的浏览器不支持 video 标签。</p>
</video>
```

如果浏览器不支持 `<video>` 标签，就会显示 `<p>` 里的提示文字。`<source>` 可以写多个，提供不同格式的视频让浏览器自行选择支持的。

## 音频标签 `<audio>`

基本用法：

```html
<audio src="./media/horse.mp3" controls></audio>
```

### 常用属性

`<audio>` 的属性和 `<video>` 基本一样，只是没有 `width`、`height` 和 `poster`：

| 属性 | 作用 |
|------|------|
| `src` | 音频文件路径 |
| `controls` | 显示播放控件 |
| `autoplay` | 自动播放（同样需要 `muted`） |
| `muted` | 静音 |
| `loop` | 循环播放 |

兼容性写法同样适用：

```html
<audio src="./media/horse.mp3" controls>
  <source src="./media/horse.mp3" type="audio/mpeg">
  <p>您的浏览器不支持 audio 标签。</p>
</audio>
```

### 浏览器不让音频自动播放

和视频一样，**音频标签浏览器也不让自动播放**，后续可以通过 JS 实现——这是后面要学的内容。

## 关于 HTML5 的"键值相同可省略"

老师在这节课还顺便提了一个重要知识点：

> 在 HTML5 中，如果属性的**键和值相同**，则可以省略值，直接写键即可。

比如：

```html
<!-- 完整写法 -->
<input type="text" disabled="disabled">
<video controls="controls" autoplay="autoplay" muted="muted" loop="loop">

<!-- HTML5 简写 -->
<input type="text" disabled>
<video controls autoplay muted loop>
```

像 `controls`、`autoplay`、`muted`、`loop`、`disabled`、`readonly`、`checked`、`selected` 这些**布尔属性**，都适用这个规则。

## 我练习的代码

这是我写的完整例子，结合了视频和音频标签的多种属性：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <h2>视频标签的基本使用</h2>
  <!-- HTML5中，键和值相同可省略值，直接写键 -->
  <!-- controls属性：添加视频控制器 -->
  <!-- autoplay属性：自动播放 -->
  <!-- 想要自动播放，必须添加muted属性 -->
  <!-- muted属性：静音播放 -->
  <!-- loop属性：循环播放 -->
  <!-- poster属性：视频封面（播放前显示的图片） -->
  <video src="./media/test1.mp4" width="600" controls autoplay muted loop poster="./img/test1.png"></video>

  <!-- 兼容性写法 -->
  <video src="./media/test1.mp4" width="600" controls autoplay muted loop poster="./img/test1.png">
    <source src="./media/test1.mp4" type="video/mp4">
    <p>您的浏览器不支持 video 标签。</p>
  </video>

  <h2>音频标签的基本使用</h2>
  <audio src="./media/horse.mp3" controls autoplay muted loop></audio>

  <!-- 兼容性写法 -->
  <audio src="./media/horse.mp3" controls autoplay muted loop>
    <source src="./media/horse.mp3" type="audio/mpeg">
    <p>您的浏览器不支持 audio 标签。</p>
  </audio>
</body>

</html>
```

点击文章上方的「🌐 在线演示」可以查看实际效果（注意：`autoplay` 在演示页面中可能受浏览器策略限制不会自动播放，手动点播放按钮即可）。

## 小节总结

| 标签 | 作用 | 特有属性 |
|------|------|---------|
| `<video>` | 播放视频 | `width`、`height`、`poster` |
| `<audio>` | 播放音频 | 无 |
| 共有属性 | `src`、`controls`、`autoplay`、`muted`、`loop` | |
| 布尔属性简写 | `controls` 等价于 `controls="controls"` | |
