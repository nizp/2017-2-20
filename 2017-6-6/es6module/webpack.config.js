const path = require('path');
//对webpack进行配置
//入口，出口，loader，插件    webpack核心
module.exports = {
  entry:'./app.js',
  output:{
    filename:'app.js',
    path: path.resolve(__dirname, 'build')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader'
        }
      }
    ]
  }
}