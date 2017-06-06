const http = require('http');
const fs = require('fs');
/*
  http://localhost:8088/user?act=add&user=momo&pass=123
  
  /user  用户接口  -> /moveies   /books
  
*/
const server = http.createServer(function(require,response){
  //console.log( require.url );
  if(require.url == '/favicon.ico')return;
  const arr = require.url.split('?');
  const url = arr[0];///user
  //act=add&user=momo&pass=123
  //[ 'act=add', 'user=momo', 'pass=123' ]
  const data = arr[1].split('&');
  const act = data[0].split('=');
  switch (act[1]) {
    case 'add':
      //创建
      response.write('add');
      break;
    case 'login':
      //登陆
      response.write('login');
      break;
    default:
        response.write('404');
      break;
  }
  response.end();

  
  
  
  
  
  // console.log(url,data);
  
  
  
});

server.listen(8088);