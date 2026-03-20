import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    console.log('Hello render', this.props)
    // Hello render {children: 'hello 组件标签体'}
    return (
      <div>
        <h1>Hello React Router5</h1>
      </div>
    )
  }
}
