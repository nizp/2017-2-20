//创建一个自己的服务器
const http = require('http'); //http模块

const server = http.createServer(function(require,response){
  //require 请求   浏览器发给服务器的
  //response 应答  发给浏览器信息
  //console.log('呵呵哒');
  console.log(require.url)
  response.write('hehe!'); //向客户端发送东西
  response.end();//发送完毕（必须要加）
});
server.listen(88);//端口号





