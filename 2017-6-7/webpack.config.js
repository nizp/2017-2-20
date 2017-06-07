const path = require('path');
const html = require('html-webpack-plugin');
const link = require('extract-text-webpack-plugin');
module.exports = {
  entry:{
    ppa:'./app.js'
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'build/src')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:['babel-loader']
      },
      {
        test:/\.css$/,
        use:link.extract({
          fallback:'style-loader',
          use:'css-loader'
        })
        //['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    new html({
      filename:'../index.html',
      template:'1.html'
    }),
    new link('index.css')
  ]
  
}