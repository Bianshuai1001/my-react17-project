import React, { Component } from 'react'
import { NavLink,  Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink/MyNavLink'

import './index.css'


export default class App extends Component {
  
  
  render() {
    return (
      <div className="container">
        <Header />
        <div className="flex">
          <div className="menu flex flex-column">
            <MyNavLink to="/home" activeClassName="active" className="menu-item">
              Home
            </MyNavLink>
            <MyNavLink to="/about" activeClassName="active" className="menu-item">
              About
            </MyNavLink>
          </div>
          <div className="content">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
