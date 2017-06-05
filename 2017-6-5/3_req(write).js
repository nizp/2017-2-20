//创建一个自己的服务器
const http = require('http'); //http模块

const server = http.createServer(function(require,response){
  //require 请求   浏览器发给服务器的
  //response 应答  发给浏览器信息
  //console.log('呵呵哒');
  // console.log(require.url);  //可以拿到请求的具体路径
  // 下面这种方式有个弊端，所有的文件都要写一遍访问才有正确的回应，
  // 不写就404
  switch (require.url) {
    case '/1.html':
        response.write('hehe1');
      break;
    case '/2.html':
        response.write('hehe2');
      break;
    case '/3.html':
        response.write('hehe3');
      break;
    default:
        response.write('404');
      break;
  }
  response.end();
});
server.listen(88);//端口号





