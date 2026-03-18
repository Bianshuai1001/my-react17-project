import React, { Component } from 'react'
import Item from '../item/item'
import './list.css'
import PubSub from 'pubsub-js'


export default class List extends Component {
  state = {
    // 用户列表
    user: [],
    isFirst: true,
    isLoading: false,
    error: ''
  }
  token = ''
  render() {
    let { user, isFirst, isLoading, error } = this.state
    if (isFirst) {
      return <h3 className="text-center">让我们来搜索一些用户吧！</h3>
    } else if (isLoading) {
      return <h3 className="text-center">Loading...</h3>
    } else if (error) {
      return <h3 className="text-center">{error}</h3>
    } else {
      return (
        <div className="list-row">
          {
            user.map((item) => {
              return <Item key={item.id} {...item} />
            })
          }
        </div>
      )
    }
  }
  componentDidMount() {
    // 订阅消息
    this.token = PubSub.subscribe('user', (msg, newState) => {
      this.setState(newState)
    })
  }
  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token)
  }
}