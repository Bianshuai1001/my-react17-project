import React, { Component } from 'react'
import './Header.css'
import PropTypes from 'prop-types'



export default class Header extends Component {
  state = {
    newTodo: '',
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className='header-container'>
        <input type="text" placeholder="请输入计划任务，回车确认" value={this.state.newTodo} onChange={this.changeNewTodo} onKeyUp={this.submitTodo} />
      </div>
    )
  }
  changeNewTodo = (e) => {
    this.setState({ newTodo: e.target.value })
  }
  submitTodo = (e) => {
    if (e.code === 'Enter') {
      this.props.addTodo(this.state.newTodo)
      this.setState({ newTodo: '' })
    }
  }
}

