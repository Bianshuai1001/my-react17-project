import React, { Component } from 'react'
import axios from 'axios'
import './search.css'
import PubSub from 'pubsub-js'


export default class Search extends Component {
  myRef = React.createRef()

  search = async () => {
    // 获取输入
    // let keyWord = this.myRef.current.value

    // 连续解构赋值的写法（并改名）
    let {current:{value:keyWord}} = this.myRef

    if (keyWord.trim() === '') {
      return alert('请输入内容')
    }
    // https://api.github.com 已经在后端 cros 解决了跨域
    // 发生请求
    let URL = `https://api.github.com/search/users?q=${keyWord}`
    // 发布消息
    PubSub.publish('user', {
      user: [],
      isFirst: false,
      isLoading: true,
      error: ''
    })
    // axios 发生请求
    axios.get(URL)
      .then((value) => {
        console.log(value.data.items)
        // 发布消息
        PubSub.publish('user', {
          user: value.data.items,
          isFirst: false,
          isLoading: false,
          error: ''
        })
      })
      .catch((error) => {
        console.log(error)
        // 发布消息
        PubSub.publish('user', {
          user: [],
          isFirst: false,
          isLoading: false,
          error: error.message
        })
      })

    // 使用 fetch 发生请求(含fetch的优化版本1)
    /*
      fetch 是关注分离的，即连接成功与否和数据处理是分离的
    */
    // fetch(URL)
    //   .then(
    //     (response) => {
    //       console.log('联系服务器成功了');
    //       return response.json() // 返回一个 Promise 对象
    //     },

    //     /*
    //       Promise 大规则：（重中之重）
    //       1. 如果.then指定的回调（成功的回调或者是失败的回调）的返回值是一个非 Promise 的值，那么外侧的.then(和前边的.then是同一个)返回的 Promise 实例的状态就为成功的，且值为该非 Promise 的值
    //       2. 如果.then指定的回调（成功的回调或者是失败的回调）的返回值是一个 Promise 对象，那么外侧的.then(和前边的.then是同一个)返回的 Promise 实例的状态就为该 Promise 对象的状态，且值为该 Promise 对象的值

    //     */
    //     // （ 优化版本1: 这里被优化，而采用兜底catch统一处理错误 ）
    //     // (error) => {
    //     //   console.log('联系服务器失败了', error) // 如果在此处声明接收错误的话，当进入此分支时， 若只写这一句，会导致返回值是 undefined，那么会认为请求是成功的（规则1），进而进入后面获取数据的then中（也就是进入“获取数据成功”的回调里），这是我们不想看到的
    //     //   // 所以如果联系服务器失败了，我们可以声明一个Promise,来终止后面的then的执行
    //     //   return new Promise(() => {})  // 终断 Promise 链
    //     //   // 当然也可以手动抛出错误，使后面的then都进入catch分支
    //     //   // return Promise.reject(error)
    //     //   // 但是一般我们不在中间接收错误，而是会在最后面的catch中接收错误
    //     // }
    //   )
    //   .then((response) => {
    //     console.log('获取数据成功了');
    //     console.log(response.items)
    //     // 发布消息
    //     PubSub.publish('user', {
    //       user: response.items,
    //       isFirst: false,
    //       isLoading: false,
    //       error: ''
    //     })
    //   })
    //   .catch((error) => {
    //     // 统一处理错误：兜底catch，当联系服务器成功了，但是获取数据失败了，也会进入这里
    //     // 统一处理可以优化掉71行的错误处理
    //     console.log(error)
    //     // 发布消息
    //     PubSub.publish('user', {
    //       user: [],
    //       isFirst: false,
    //       isLoading: false,
    //       error: error.message
    //     })
    //   })

      // fetch 优化版本2
      // try {
      //   let res = await fetch(URL);
      //   let data = await res.json();
      //   console.log(data);
      //   PubSub.publish('user', {
      //     user: data.items,
      //     isFirst: false,
      //     isLoading: false,
      //     error: ''
      //   })
      // } catch (error) {
      //   console.log(error);
      //   PubSub.publish('user', {
      //     user: [],
      //     isFirst: false,
      //     isLoading: false,
      //     error: error.message
      //   })
      // } 
    // 清空输入
    this.myRef.current.value = ''
  }

  render() {
    return (
      <div className='search-container'>
        <input type="text" placeholder="请输入关键字" ref={ this.myRef} />&nbsp;
        <button onClick={this.search}>搜索</button>
      </div>
    )
  }
}