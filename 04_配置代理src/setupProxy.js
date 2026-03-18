// 该文件是 react 项目中的代理配置文件
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api1',{  // api1 是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:5000', // 配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true,  // 控制服务器接收到的请求头中host字段的值
      /*
        changeOrigin 设置为true时，服务器收到的请求头中的host为:localhost:5000 (让服务器以为请求就来自localhost:5000)
        change0rigin设置为false时，服务器收到的请求头中的host为:localhost:3000 
        changeorigin默认值为false,但我们]一般将changeorigin值设为true
      */
      pathRewrite: { // 去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        '^/api1': ''
      }
    }),
    proxy('/api2',{
      target: 'http://localhost:5002',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': ''
      }
    })
  );
};


/*
  假设你的脚手架启动在localhost:3000，
  而你要请求的目标服务器地址为localhost:5000，
  则你需要在该文件中配置一个代理
  
  但是在代码中的写法是这样的：
  axios.get('http://localhost:3000/api1/students')
    因为你为了解决跨域在请求时，必须请求和你脚手架启动地址相同的域名和端口，所以你写成“http://localhost:3000”，
    但是咱们的数据服务器在localhost:5000(或者其他的域名和端口)，
    所以我们在配置代理时，将目标服务器地址配置为localhost:5000，
    并设置前缀为/api1（表示所有带有/api1前缀的请求都会转发给localhost:5000）
    但是，我们通过设置pathRewrite，将/api1前缀去除，
    进而保证了发给后台的接口路径是正确的
    最终转发给localhost:5000的请求地址为：localhost:5000/students；
  
  站在http://localhost:3000的位置，请求http://localhost:3000的接口，所以我们简写为：
    axios.get('/api1/students')

  代理自会转发所有带有/api1前缀的请求给localhost:5000；
*/