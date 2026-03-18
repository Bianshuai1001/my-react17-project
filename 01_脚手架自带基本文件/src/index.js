// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 渲染 App 组件到 root 元素
ReactDOM.render(
  // 可以检查 App 组件内是否符合 React 规范
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
