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
    let {location,match} = this.props;
    console.log(location,match);
    
    console.log(match.params.username);
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
  使用了路由之后，this.props下会有2个属性
  一个属性:
    match:
      找配置路由通过  match.path查找
        比如：配置的时候为path="/",那么就会显示"/"
      
      定义的时候
        path="/color/:xx"
        
      '/color/12'
      这个12可以通过  match.params.xx去取（定义的时候）
      
      
        
    ***如果在match.url中遇到了不真实的路径，那么请及时用loaction
        
    loaction
      loaction.pathname  可以告诉你真实url上的地址
  
*/

//<Route path="color/:id" component={Red}/></Route>
ReactDOM.render(
  <Router>
    <div>
      <Router>
        <Route path="/xh/:username" component={Red}/>
      </Router>
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
