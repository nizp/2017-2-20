const http = require('http');
const fs = require('fs');
/*
  fs.readFile    读文件
  fs.writeFile   写文件
*/
http.createServer((req,res)=>{
  //创建了一个1.txt内容为hehe
  fs.writeFile('1.txt','hehe',(error)=>{});
}).listen(88);