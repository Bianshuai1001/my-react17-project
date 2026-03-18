import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-left">
          <input type="checkbox" checked={ this.props.allDone } className="footer-checkbox" onChange={(e) => this.props.changeAllDone(e.target.checked)} />
          <div>
            <span>已完成{ this.props.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0) }项</span>/
            <span>共{this.props.todos.length}项</span>
          </div>
        </div>
        <button onClick={() => this.props.clearTodos(this.props.todos.filter((todo) => todo.done === true).map((todo) => todo.id))}>清除已完成任务</button>
      </div>
    )
  }
  componentDidMount() {
    this.setState({
      doneCount: this.props.todos.filter((todo) => todo.done === true).length,
      totalCount: this.props.todos.length,
    })
  }
}
