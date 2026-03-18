import React, { Component } from 'react';
// 引入 Welcome.css 样式文件(这是样式的模块化处理)
// 样式的模块化处理 
//  注意： 
//      1. 样式文件的命名
//      2. 样式类名的使用
//      3. 样式文件的引入
import WelcomeStyles from './Welcome.module.css';

// 创建并暴露 Welcome 组件
export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1 className={WelcomeStyles.title}>Welcome, React!</h1>
      </div>
    );
  }
}
// 注意： 在react中，组件的文件名一般是 组件名.jsx，也可以使用.js后缀，但是使用jsx,可以来区分是组件文件还是普通的js文件