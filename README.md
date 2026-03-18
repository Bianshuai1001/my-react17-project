## todoList 这个案例的总结：
1.拆分组件、实现静态组件，注意:className、style的写法
2.动态初始化列表，如何确定将数据放在哪个组件的state中?
    某个组件使用:放在自身的state中
    某些组件使用:放在他们共同的父组件state中(官方称此操作为:状态提升)
3.关于父子之问通信:
    1.【父组件】给【子组件】传递数据:通过props传递
    2.【子组件】给【父组件】传递数据:通过props传递，要求父提前给子传递一个函数
4.注意defaultChecked 和  checkedi的区别. 类似的还有: defaultValue 和 value
5.状态在哪里，操作状态的方法就在哪里

## 代理的问题：
因为同源策略，所以在开发环境下，我们需要使用代理来解决跨域问题
代理的服务器：可在package.json中配置，proxy字段
```json
"proxy": "http://localhost:3001"
```
假设前端脚手架运行在localhost:3000，代理服务器也会运行在localhost:3000
然后代理服务器会将所有请求转发到后端服务器，进而绕开同源策略，获得后端服务器的数据

第二种配置代理的方式在src/setupProxy.js文件中配置


## github搜索案例相关知识点
1.设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办
2.ES6小知识点:解构赋值+重命名
    let obj = {a:{b:1})
    const{a} = obj;// 传统解构赋值
    const{a:{b}}= obj; // 连续解构赋值
    const{a:{b:value}}= obj;  // 连续解构赋+重命名
3.消息订阅与发布机制
    1.先订阅，再发布(理解:有一种隔空对话的感觉)
    2.适用于任意组件问通信
    3.要在组件的componentWillUnmount中取消订阅,在componentDidMount中订阅
4.fetch发送请求(关注分离的设计思想)
    try{
        const response= await fetch(`/api1/search/users2?q=${keyWord}`)
        const data = await response.json()
        console.log(data);
    } catch (error){
        console.log('请求出错',error)
    };

## 路由原理
    紧握BOM身上的History 对象

    <script type="text/javascript" src="https://cdn.bootcss.com/history/4.7.2/history.js"></scr<script type="text/javascript">
    let history = History.createBrowserHistory() //方法1, 直接使用H5推出的history身上的APi
    let history = History.createHashHistory() //方法二. hash值 (会产生锚点路由)

    简单来说就是history对象身上的APi（listen）, 可以监听路由变化, 可以根据路由变化渲染对应的组件

