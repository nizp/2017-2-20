import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//根组件
class App extends Component {
  render(){
    return (
      <div>你好!世界</div>
    )
  }
}

class PPX extends Component {
  render(){
    return (
      <div>我是皮皮虾</div>
    )
  }
}

class Red extends Component {
  render(){
    return (
      <div>我是小红</div>
    )
  }
}

class XM extends Component {
  render(){
    return (
      <div>我是小霉</div>
    )
  }
}

/*
  react的路由需要包在Router中,
  配置路由:
    <Route path="/"  component={PPX}>
    
    下面3个为设置路由的方式
    component={组件}
    
    可以
    render={
      ()=>{
        return (
          组件
          别的组件...
        )
      }
    }
    
    children
    
    下面的对children无效
    exact :
    如果在Route加上了它，那么
      path:'/color'
      
      /color/yellow  ×（出不来）
      
      /color √（匹配上了）
    
    如果不加：
      path:'/color'
      
      浏览器上为：/color/yellow
      
      会匹配到
        '/' 和 '/color'
      
    
    如果加上strict
        path：/xh/
        /xh  ×
        
        /xh/  √
        /xh/yellow  √
        
    
    
    
*/


//<Route path="color/:id" component={Red}/></Route>
ReactDOM.render(
  <Router>
    <div>
      <Route path="/ppx" component={PPX} />
      <Route strict  path="/xh/" render={()=>{
        return (
          <div>
            <Red />
          </div>
        )
      }} />
    
      
    </div>
  </Router>
  ,
  document.getElementById('root')
);



// ReactDOM.render(
//   <Router>
//     <div>
//       <PPX />
//       <App />
//     </div>
//   </Router>
//   ,
//   document.getElementById('root')
// );
registerServiceWorker();
