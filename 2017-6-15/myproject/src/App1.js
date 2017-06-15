import React,{Component} from 'react';
import Li from './components/li';
class App extends Component {
  constructor(){
    super();
    this.state = {
      obj:[
        {
          txt:'今天天气不错',
          check:false,
          id:0
        },
        {
          txt:'今天天气不2',
          check:true,
          id:1
        }
      ]
    }
    
    this.changeChceked = this.changeChceked.bind(this);
    this.changeV = this.changeV.bind(this);
    /*
      从下往上传递，通过回调函数
      
      父组件主要定义一个回调函数专门来处理逻辑数据（操作自身的数据）

      通过传递数据的方式传递给子组件
      
      子组件需要在用户操作它的时候绑定一个事件去调用父组件传递过来的回调
      
      设置key值的时候，key值是唯一，而且还是不可变的唯一
      通过使用id
      
    */
    
    
  }
  render(){
    let {obj} = this.state;
    
    let arr = obj.map((e,i)=>{
      let data = {
        key:(+new Date+i),
        txt:e.txt,
        check:e.check,
        checkFn:this.changeChceked,
        checkV:this.changeV,
        val:e
      }
      return <Li {...data}/>
    });
    
    return (
      <div>
        <h1>你好,世界!</h1>
        <ul>
          {arr}
        </ul>
      </div>
    );
  }
  changeV(data,newValue){
    this.state.obj.forEach((e)=>{
        if(data.id == e.id){
          e.txt = newValue
        }
    });
    this.setState({
      obj:this.state.obj
    });
  }
  changeChceked(val){
    this.state.obj.forEach((e)=>{
        if(val.id == e.id){
          e.check = !e.check;
        }
    });
    this.setState({
      obj:this.state.obj
    });
  }
}

export default App;

