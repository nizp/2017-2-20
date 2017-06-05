const http = require('http');
const fs = require('fs');
/*
  fs.readFile    读文件
  fs.writeFile   写文件
*/
http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url == '/favicon.ico')return;
  let fileName = 'www'+req.url;
  // console.log(fileName);
  fs.readFile(fileName,(error,data)=>{
    res.write(data);
    res.end();
    //console.log(data.toString());
  });
}).listen(88);