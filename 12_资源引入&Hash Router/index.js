import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// 引入 App 组件
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* 全部应用交由一个BrowserRouter包裹，一个路由器管理所有路由 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
