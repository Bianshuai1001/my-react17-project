import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('About render', this.props)
    // 路由组件会自动接收一个props对象，包含路由相关的属性，history,location,match
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
}

