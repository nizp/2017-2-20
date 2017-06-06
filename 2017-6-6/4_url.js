const http = require('http');
const fs = require('fs');
/*
  把根目录与字段分离
  urlT.parse();  返回值是对象
*/
const urlT = require('url');
/*
  把字符串转成对象
  querystring.parse(); 返回值是对象
  http://localhost:8088/user?act=add&user=oldGod&pass=123
*/
const querystring = require('querystring');
let dataArr = {"oldGod":123456};
http.createServer(function(require,response){
  if(require.url === '/favicon.ico')return;
  const obj = urlT.parse(require.url);
  const url = obj.pathname;//user
  //{ act: 'add', user: 'oldGod', pass: '123' }
  //act=add&user=oldGod&pass=123
  const data = querystring.parse(obj.query);//act=add&user=oldGod&pass=123
  if(url === '/user'){
    switch (data.act) {
      case 'add':
          if(dataArr[data.user]){
            response.write('{"code":1,"msg":"换个名字世界一片美好!!"}');
          }else{
            dataArr[data.user] = data.pass;
            response.write('{"code":0,"msg":"系好安全带,马上起飞!"}');
          }
        break;
      case 'login':
          
        break;
      default:
        response.write('404');
      break;
    }
    response.end();
  }else{
    let filename = 'www'+ url;
    fs.readFile(filename,function(error,data){
      response.write(data);
      response.end();
    });
  }
}).listen(8088);
