// 这种引入写法表示：引入了默认暴露的React，又引入分别暴露的Component，这可不是解构赋值的写法
import React, { Component } from 'react';
// 引入 Hello 组件
import Hello from './components/Hello/Hello';
// 引入 Welcome 组件
import Welcome from './components/Welcome/Welcome';

// 这是解构赋值的写法
// const {Component} = React;

// 创建并暴露 App 组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}
