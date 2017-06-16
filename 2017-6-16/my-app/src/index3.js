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
    
*/
//<Route path="color/:id" component={Red}/></Route>
ReactDOM.render(
  <Router>
    <div>
      <Route path="/ppx" component={PPX} />
      <Route path="/color" render={()=>{
        return (<div>
            <Red />
            <p>我是藏在小红身后的p</p>
            <XM />
        </div>)
      }} />
      <Route path="/" children={()=>{
        return (
          <div>
            <App />
          </div>
        )
      }}/>

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
