import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
require('./src/css/index.css');

let obj = {
  arr:[
    {
      check:true,
      txt:'呵呵呵',
      id:0
    },
    {
      check:false,
      txt:'哈哈哈',
      id:1
    }
  ]
}

ReactDOM.render(
  <App {...obj}/>,
  document.getElementById('app')
);
// registerServiceWorker();
