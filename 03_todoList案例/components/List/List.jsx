import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
import PropTypes from 'prop-types'



export default class List extends Component {
  // 组件接收的 props 类型
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeTodoDone: PropTypes.func.isRequired,
    clearTodos: PropTypes.func.isRequired,
  }
  
  render() {
    return (
      <div className="list-container">
        <ul>
          {
            this.props.todos.map((todo) => (
              <Item key={todo.id} todo={todo} changeTodoDone={this.props.changeTodoDone} clearTodos={this.props.clearTodos} />
            ))
          }
        </ul>
      </div>
    )
  }
}
