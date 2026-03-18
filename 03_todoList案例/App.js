import React, { Component } from 'react';
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './index.css'



// 创建并暴露 App 组件
export default class App extends Component {
  // 状态在哪里，操作状态的方法就写在那里
  state = {
    todos: [
      { id: 1, name: '学习 React', done: true },
      { id: 2, name: '学习 Vue', done: false },
      { id: 3, name: '学习 Angular', done: false },
    ],
    allDone: false,
  }
  render() {
    return (
      <div className='root-container'>
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} changeTodoDone={this.changeTodoDone} clearTodos={this.clearTodos} />
        <Footer todos={this.state.todos} allDone={this.state.allDone} clearTodos={this.clearTodos} changeAllDone={this.changeAllDone} />
      </div>
    );
  }
  // 改变 todo完成状态
  changeTodoDone = (id, done) => {
    const updateTodos = this.state.todos.map((todo) => (
        todo.id === id ? { ...todo, done: !done } : todo
    ))
    // setState 是异步更新状态的方法，所以不能在 setState 中直接使用 this.state.todos 来判断 allDone
    this.setState({
      todos: updateTodos,
      allDone: updateTodos.every((todo) => todo.done),
    })
  }
  componentDidUpdate() {
    
  }
  // 添加任务
  addTodo = (name) => {
    if (!name) {
      alert('请输入任务名称')
      return
    }
    const id = Number((Math.random() * 100000).toFixed(0))
    this.setState({
      todos: [...this.state.todos, { id, name, done: false }]
    })
  }
  // 清除任务
  clearTodos = (ids) => {
    let { todos } = this.state;
    if (!ids.length) {
      alert('请选择要清除的任务')
      return
    }
    if (window.confirm('确定要清除选中的任务吗？')) {
      todos = this.state.todos.filter((todo) => !ids.includes(todo.id))
      this.setState({
        todos: todos,
        allDone: todos.every((todo) => todo.done) && todos.length > 0,
      })
    }
  }
  // 全选任务
  changeAllDone = (done) => {
    this.setState({
      todos: this.state.todos.map((todo) => ({ ...todo, done })),
      allDone: done,
    })
  }
}
