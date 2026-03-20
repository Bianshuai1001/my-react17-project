import React, { Component } from 'react'
import { NavLink,  Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'

import './index.css'


export default class App extends Component {
  
  
  render() {
    return (
      <div className="container">
        <Header />
        <div className="flex">
          <div className="menu flex flex-column">
            {/* 为了实现选中高亮,使用NavLink组件,并添加activeClassName属性 */}
            {/* <Link to="/home">
              <div className="menu-item">
                Home
              </div>
            </Link>
            <Link to="/about">
              <div className="menu-item">
                About
              </div>
            </Link> */}
            <NavLink to="/home" activeClassName="active" className="menu-item">
              Home
            </NavLink>
            <NavLink to="/about" activeClassName="active" className="menu-item">
              About
            </NavLink>
          </div>
          <div className="content">
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </div>
    )
  }
}
