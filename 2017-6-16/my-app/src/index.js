import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import Header from './components/header';
import Li from './components/li';
import Footer from './components/footer';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//根组件
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr:[]
    }
    this.add = this.add.bind(this);
  }

  render(){
    let {arr} = this.state;
    let {location:{pathname:view}} = this.props;
    //arr2通过this.view来切换视图
    let arr2 = null;
    //存footer组件
    let foot = null;
    //存section组件的
    let section = null;
    //存全选状态的
    let allCheck = false;
    //计算未选中个数的
    let len = arr.length;
    let num = arr.length;
    
    //let {pathname} = location
    
    console.log(view);
    //变化未选中的。
    arr.forEach((e)=>{
      if(e.check)len--;
    });
    
    //过滤后的数据。
    arr2 = arr.filter((e)=>{
      switch (view) {
        case '/all':
          return true;
        break;
        case '/active':
          return !e.check;
        break;
        case '/completed' :
          return e.check;
        break;
        default:
          return true;
        break;
      }
    });
    
    //批量生产Li组件的
    if(arr.length){
      
      //把已经未选中的数据个数统计出来 10 ==
      if(arr2.length){
        allCheck = arr2.every((e)=>{
            return e.check;
        });
      }

      arr2 = arr2.map((e)=>{
        let data = {
          txt:e.txt,
          id:e.id,
          key:e.id,
          check:e.check,
          data:e,
          PchangeCheck:this.PchangeCheck
        }
        return <Li  {...data}/>;
      });
    
      section = (
        <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              checked={allCheck}
              ref="allCheck"
              onChange={this.changeAll}
            />
            <ul className="todo-list">
              {arr2}
            </ul>
        </section>
      )
      
      foot = (
        <Footer {...{
          num:len,
          view,
          setView:this.setView,
          clear:this.clear,
          active:((num-len)!=0)
        }}/>
      )
    }
  //  console.log(allCheck)
    
    let setContent = {
      arr,
      PPchangeCheck:this.PPchangeCheck
    }
  
    return (
      <div>
        <Header add={this.add}/>
        {section}
        {foot}
      </div>
    );
  }
  add(val){
    let {arr} = this.state;
    arr.push(val);
    
    this.setState({
      arr
    });
    // console.log(this.state.arr);
  }
  
  clear = () => {
    let {arr} = this.state;
    
    arr = arr.filter((e)=>{
      return !e.check;
    });
    
    this.setState({
      arr
    });
    
  }
  
  //设置视图
  setView = (view) => {
    this.setState({
      view
    });
  }
  
  changeAll = () => {
    let {arr} = this.state;
    //通过当前点击的元素来操作每个数据中的check，当check变化的
    //时候自然会触发render，只要进render
    let {checked} = this.refs.allCheck;
    arr.forEach((e)=>{
      e.check = checked
    });
    this.setState({
      arr
    });
    
  }
  //点击li下的checkbox来更新视图的状态。
  PchangeCheck = (data) => {
    let {arr} = this.state;
    arr.forEach((e)=>{
      if(e.id == data.id){
        e.check = !e.check;
      }
    });
    this.setState({
      arr
    });
  }
}

ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
  </Router>
  ,
   document.getElementById('root'));
registerServiceWorker();
