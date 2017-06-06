const http = require('http');
const fs = require('fs');
const server = http.createServer(function(require,response){
  // console.log(require.url);
  let url = require.url;//  /1.html
  if(url == '/favicon.ico')return;
  let filename = 'www'+ url;
  fs.readFile(filename,function(error,data){
    //console.log(data);
    response.write(data);
    response.end();
  });
  
  
  
  
  
  console.log(url);
  
  // if(){
  //
  // }
  // response.write('abc');
  // response.end();
});
server.listen(8088);