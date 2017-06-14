const path = require('path');
const link = require('extract-text-webpack-plugin');
const html = require('html-webpack-plugin');
module.exports = {
  entry:{
    main:'./main.js'
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'build/src')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:['env','react']
            }
          }
        ],
        exclude:[path.resolve(__dirname,'node_modules')]
      },
      {
        test:/\.css$/,
        use:link.extract({
          fallback:'style-loader',
          use:'css-loader'
        }),
        exclude:[path.resolve(__dirname,'node_modules')]
      }
    ]
  },
  plugins:[
    new html({
      filename:'../index.html',
      template:'index.html'
    }),
    new link('index.css')
  ]
}

