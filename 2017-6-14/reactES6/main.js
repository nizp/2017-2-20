import H1 from './src/app';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// let num = 0;
// let arr = [1,2,3,4];
//props  :data="arr"

/*
  子组件接收父组件数据，通过this.props来接收
  如果在consturctor中获取this.prosp.xxx那么只会
  在第一次加载页面的时候获取到，当父组件的这个数据
  发生变化的时候，consturctor的this.prosp.xxx
  是不会更改的。只会在render中更改。
  
  父组件传递给子组件的数据，是不允许直接在子组件中修改的
  Vue,React 都是不允许的。（简单类型）
  
  父组件数据在传递的时候是在子组件的JSX模型下添加一个自定义的属性。
    <Hezi data={数据名}>
    <Hezi data={数据名} data2={数据名2}>
    <Hezi {...data}>
    
  
  
  
*/





let json = {
  num:0,
  arr:[1,2,3,4]
};

//{...json} jsx语法糖->扩展运算符 num:0,arr:[1,2,3,4]
ReactDOM.render(<H1 {...json}/>,document.getElementById('app'));

// ReactDOM.render(<H1 data={num} arr={arr}/>,document.getElementById('app'));

// console.log(React,ReactDOM,React.Component);