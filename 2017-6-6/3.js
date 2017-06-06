const http = require('http');
const fs = require('fs');
/*
  http://localhost:8088/user?act=add&user=momo&pass=123
  
  /user  用户接口  -> /moveies   /books
  
*/
let obj = {"oldGod":"123456","momo":"123"};  //user=oldGod
const server = http.createServer(function(require,response){
  //console.log( require.url );

  if(require.url == '/favicon.ico')return;
  const arr = require.url.split('?');
  const url = arr[0];///user
  //act=add&user=momo&pass=123
  //[ 'act=add', 'user=momo', 'pass=123' ]
  if(url == '/user'){//处理接口
    const data = arr[1].split('&');
    const act = data[0].split('=');
    switch (act[1]) {
      case 'add':
        //创建
        data.forEach((e)=>{
          const arr = e.split('=');
          //user,momo
          if(arr[0] == 'user'){//用户名处理
            //"数据库"中有没有这个用户名
            if(!obj[arr[1]]){
              obj[arr[1]] = 1; //没有就添加这个用户名
              response.write('{"code":0,"msg":"注册成功"}');
            }else{
              response.write('{"code":1,"msg":"用户名已经存在"}');
            }
          }
        });
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
  }else{
    //处理文件
    let filename = 'www'+ url;
    fs.readFile(filename,function(error,data){
      response.write(data);
      response.end();
    });
  }
  

  
  
  
  
  
  // console.log(url,data);
  
  
  
});

server.listen(8088);