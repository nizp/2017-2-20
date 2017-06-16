import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import Header from './components/header';
import Li from './components/li';
import Footer from './components/footer';

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
    let arr2 = null;
    let foot = null;
    let section = null;
    let allCheck = false;
    let len = arr.length;
    
    //console.log(len);
    
    arr.forEach((e)=>{
      if(e.check)len--;
    });

    if(arr.length){
      arr2 = arr.map((e)=>{
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
      //把已经选中的数据个数统计出来
      allCheck = arr.every((e)=>{
          return e.check;
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
        <Footer num={len}/>
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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
