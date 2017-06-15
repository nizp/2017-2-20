import React,{Component} from 'react';
import Li from './components/li';
import Select from './components/select';
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
    /*
      如果bind对于你有困惑，那么在定义函数的时候
      用箭头函数：
        changeV = () => {}
    */
    //this.changeV = this.changeV.bind(this);
    this.changeChceked = this.changeChceked.bind(this);
    
    /*
      给组件设置一个ref=xxx的标记，可以直接找到对应的元素
      
      读取
        this.refs.xxx
        
        
        
    */
    
  }
  render(){
    let {obj} = this.state;
    let arr = obj.map((e,i)=>{
      let data = {
        key:e.id,
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
        <Select />
        <ul>
          {arr}
        </ul>
      </div>
    );
  }
  //父组件改变内容的函数
  changeV = (data,newValue) => {
    let {obj} = this.state;
    
    obj.forEach((e)=>{
      if(e.id == data.id){
        e.txt = newValue;
      };
    });
    
    this.setState({
      obj
    });
    // console.log(data,newValue)
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

