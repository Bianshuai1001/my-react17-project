import React, { Component } from 'react';
// 引入 Hello.css 样式文件(这是样式的模块化处理)
// 样式的模块化处理 
//  注意： 
//      1. 样式文件的命名
//      2. 样式类名的使用
//      3. 样式文件的引入
import HelloStyles from './Hello.module.css';

// 创建并暴露 Hello 组件
export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className={HelloStyles.title}>Hello, React!</h1>
      </div>
    );
  }
}
// 注意： 在react中，组件的文件名一般是 组件名.jsx，也可以使用.js后缀，但是使用jsx,可以来区分是组件文件还是普通的js文件