---
title: '待办清单应用 (Todo App)'
description: '用原生 JavaScript 实现的待办事项管理应用，支持增删改查、本地存储、暗色模式。'
pubDate: 2025-02-15
repo: 'https://github.com/yourusername/todo-app'
demo: 'https://your-todo-app.vercel.app'
techStack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage']
featured: true
---

## 项目简介

这是我学习 JavaScript 后的第一个完整项目。一个功能完整的待办清单应用。

## 核心功能

- ✏️ 添加、编辑、删除待办事项
- ✅ 标记完成/未完成
- 🔍 筛选（全部/进行中/已完成）
- 💾 数据持久化（LocalStorage）
- 🌙 暗色模式切换

## 学到的东西

1. **DOM 操作**：`createElement`、`addEventListener`、事件委托
2. **数据持久化**：`localStorage.setItem/getItem`
3. **状态管理**：用数组管理所有 todo 数据，渲染函数统一更新视图
4. **CSS 变量**：配合 `data-theme` 属性实现暗色模式

## 核心代码片段

```javascript
const todos = JSON.parse(localStorage.getItem('todos')) || [];

function render() {
  const list = document.getElementById('todo-list');
  list.innerHTML = todos
    .filter(filterFn)
    .map(todo => `
      <li class="${todo.done ? 'done' : ''}">
        <input type="checkbox" ${todo.done ? 'checked' : ''} />
        <span>${todo.text}</span>
        <button class="delete">×</button>
      </li>
    `).join('');
  localStorage.setItem('todos', JSON.stringify(todos));
}
```

## 截图

（这里可以放项目截图）

## 改进方向

- [ ] 添加拖拽排序
- [ ] 支持多列表（分类）
- [ ] 用 React 重写
