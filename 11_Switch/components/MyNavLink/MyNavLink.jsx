import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    console.log('MyNavLink render', this.props);
    
    return (
      // <NavLink {...this.props} className="menu-item" activeClassName="active">
      //   {/* children 是子组件或者是标签体内容，用于渲染导航链接的文本 */}
      //   {this.props.children}
      // </NavLink>
      // 可简写为：
      <NavLink {...this.props} className="menu-item" activeClassName="active" />
    )
  }
}
