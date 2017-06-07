import fn from './comm/1.js'; //引js的语法
import ff from './comm/2.js';
import {fnn} from './2.js';//工具模块都在modules中引入的时候如果不带路径就是默认就走modules
require('./src/1.css'); //引入css的语法
// require('./src/2.css');
console.log(fnn,fn,ff);

