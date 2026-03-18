import React, { Component } from 'react'
import Item from '../item/item'
import './list.css'


export default class List extends Component {
  render() {
    let { user, isFirst, isLoading, error } = this.props
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
}