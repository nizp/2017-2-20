const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry:{
    ppa:'./app.js'
  },
  output:{
    path: path.resolve(__dirname, 'build'),
    //**name相当于变量，这个变量对应entry的key值
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[{
          //http://babeljs.io/docs/usage/api/
          loader:"babel-loader"
        }]
      },
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
        })
        //['style-loader','css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      //打包好的文件叫什么
      filename: 'text.html',
      //引哪个路径下的模板
      template:'1.html'
    }),
    new ExtractTextPlugin('1.css')
  ]
}