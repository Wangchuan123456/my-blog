---
title: 'CSS 属性选择器 [attr] [attr=value] [attr^=] [attr$=] [attr*=]'
description: '根据元素的 HTML 属性来选中——有某个属性、属性等于什么、以什么开头/结尾、包含什么。'
pubDate: 2026-07-07
tags: ['CSS', '属性选择器', '选择器']
category: '学习笔记'
order: 21
demo: '/examples/css-attribute-selectors/index.html'
---

## 前言

前面学的选择器都是根据**标签名、class、id、位置**来选。属性选择器则是根据元素的 **HTML 属性**来选中。

比如：所有带 `href` 的链接、所有 `type="text"` 的输入框、所有 `class` 以 `font` 开头的元素……

## 五种属性选择器

| 写法 | 含义 | 示例 |
|------|------|------|
| `[attr]` | 包含该属性 | `a[class]` — 有 class 的 a 标签 |
| `[attr="value"]` | 属性值完全匹配 | `a[class="font"]` — class 正好是 font |
| `[attr^="value"]` | 属性值**以 xx 开头** | `a[class^="font"]` — class 以 font 开头 |
| `[attr$="value"]` | 属性值**以 xx 结尾** | `a[class$="14"]` — class 以 14 结尾 |
| `[attr*="value"]` | 属性值**包含 xx** | `a[class*="font"]` — class 中含有 font |

## 一、[attr] — 包含属性

选中**有该属性**的元素，不管属性值是什么。

```css
a[class] {
  color: red;
}
```

```html
<a href="#">没有 class，不变</a>
<a href="#" class="font">有 class，变红</a>
<a href="#" class="red">有 class，变红</a>
```

## 二、[attr="value"] — 完全匹配

属性值必须**完全等于**指定值。

```css
a[class="font"] {
  color: red;
}
```

```html
<a href="#" class="font"> ✅ 完全匹配 font，变红</a>
<a href="#" class="font14"> ❌ 不等于 font，不变</a>
```

## 三、[attr^="value"] — 以 xx 开头

属性值以指定内容**开头**。

```css
a[class^="font"] {
  color: red;
}
```

```html
<a href="#" class="font">  ✅ 以 font 开头，变红</a>
<a href="#" class="font14"> ✅ 以 font 开头，变红</a>
<a href="#" class="red">     ❌ 不以 font 开头，不变</a>
```

## 四、[attr$="value"] — 以 xx 结尾

属性值以指定内容**结尾**。

```css
a[class$="14"] {
  color: red;
}
```

```html
<a href="#" class="font14"> ✅ 以 14 结尾，变红</a>
<a href="#" class="font16"> ❌ 以 16 结尾，不变</a>
```

## 五、[attr*="value"] — 包含 xx

属性值中**包含**指定内容即可，不关心里面的位置。

```css
a[class*="font"] {
  color: red;
}
```

```html
<a href="#" class="font">   ✅ 包含 font，变红</a>
<a href="#" class="font14">  ✅ 包含 font，变红</a>
<a href="#" class="myfont">  ✅ 包含 font，变红</a>
<a href="#" class="red">     ❌ 不包含 font，不变</a>
```

## 六、实际应用

### 选中特定类型的输入框

```css
/* 所有文本输入框 */
input[type="text"] {
  outline: none;
}

/* 密码输入框 */
input[type="password"] {
  outline: none;
}

/* 复选框 */
input[type="checkbox"] {
  /* 自定义复选框样式 */
}
```

不用写 class，直接根据 `type` 属性值选中，非常方便。

### 选中外部链接

```css
/* href 以 http 开头的就是外部链接 */
a[href^="http"] {
  color: blue;
}

/* 下载链接 */
a[href$=".zip"]::after {
  content: ' ⬇';
}
```

## 我练习的演示页面

做了一个属性选择器五种写法的对比演示页面。

点击文章上方的「🌐 在线演示」查看。

## 小结

| 写法 | 含义 | 像什么？ |
|------|------|---------|
| `[attr]` | 有该属性即可 | "有就行" |
| `[attr="v"]` | 属性值完全等于 v | "就等于" |
| `[attr^="v"]` | 属性值以 v 开头 | "开头是" |
| `[attr$="v"]` | 属性值以 v 结尾 | "结尾是" |
| `[attr*="v"]` | 属性值包含 v | "里面有" |

> 属性选择器的最大好处是**不用加 class**——根据元素已有的属性就能选中，特别适合表单控件和外部链接。
