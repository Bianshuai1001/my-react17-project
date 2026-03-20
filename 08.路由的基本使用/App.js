import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './index.css'


export default class App extends Component {
  
  
  render() {
    return (
      <div className="container">
        <h3>React Router5 Demo</h3>
        <div className="flex">
          {/*
           BrowserRouter 路径无#号
           对应 Window上的 History 对象身上的History.createBrowserHistory

           同理，HashRouter 路径有#号
           对应 History.createHashHistory方法创建路径对象的方式


           */}
          <div className="menu flex flex-column">
            <Link to="/home">
              <div className="menu-item">
                Home
              </div>
            </Link>
            <Link to="/about">
              <div className="menu-item">
                About
              </div>
            </Link>
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
