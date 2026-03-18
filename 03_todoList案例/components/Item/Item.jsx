import React, { Component } from 'react'
import './item.css'
import PropTypes from 'prop-types'


export default class Item extends Component {
  state = {
    isActive: false,
  }

  static propTypes = {
    todo: PropTypes.object.isRequired,
    changeTodoDone: PropTypes.func.isRequired,
    clearTodos: PropTypes.func.isRequired,
  }

  setActiveTodo = (res) => {
    return () => {
      this.setState({ isActive: res })
    }
  }
  render() {
    const { todo, changeTodoDone, clearTodos } = this.props
    return (
      <li className="list-item" style={{ backgroundColor: this.state.isActive ? 'lightblue' : 'white' }} key={todo.id} onMouseEnter={this.setActiveTodo(true)} onMouseLeave={this.setActiveTodo(false)}>
        <label className="list-item-label">
          <input type="checkbox" checked={todo.done} className="list-item-checkbox" onChange={() => changeTodoDone(todo.id, todo.done)} />
          <p>{todo.name}</p>
        </label>
        <button style={{ display: this.state.isActive ? 'block' : 'none' }} onClick={() => clearTodos([todo.id])}>删除</button>
      </li>
    )
  }
}
