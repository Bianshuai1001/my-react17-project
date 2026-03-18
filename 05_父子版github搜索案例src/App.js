import React, { Component } from 'react'
import Search from './components/search/search'
import List from './components/list/list'


export default class App extends Component {
  state = {
    // 用户列表
    user: [],
    isFirst: true,
    isLoading: false,
    error: ''
  }
  updateState = (newState) => {
    this.setState(newState)
  }
  render() {
    return (
      <div>
        <Search updateState={this.updateState} />
        <List {...this.state}  />
      </div>
    )
  }
}
