import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//根组件
class App extends Component {
  render(){
    return (
      <div>
        <div>你好!世界</div>
        <Link to="/xm">到小霉那</Link>
        
        <Link to={{
          pathname:'/ppx',
          state:{
            num: 10
          }
        }}> <button>到皮皮虾那玩</button> </Link>
      </div>
    )
  }
}

/*
// <a href="/xm">到小霉那</a><br />
// <a href="/xh">到小红那</a><br />
// <a href="/">哪都不去</a><br />

*/

class PPX extends Component {
  render(){
    let {match,location} = this.props;
    
    console.log(match);
    console.dir(location.state);
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
ReactDOM.render(
  <Router>
    <div>
      <Router>
        <div>
          <Route path="/xh" component={Red}/>
          <Route path="/" component={App}/>
          <Route path="/xm" component={XM}/>
          <Route path="/ppx" component={PPX}/>
        </div>
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
