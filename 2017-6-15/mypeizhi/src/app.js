import React,{Component} from 'react';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
//根组件
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr:this.props.arr,
      allCheck:false
    }
    
    this.add = this.add.bind(this);
    this.PPchangeCheck = this.PPchangeCheck.bind(this);
  }
  render(){
    
    let {arr} = this.state;
    
    //把已经选中的数据个数统计出来
    
    let allCheck = arr.every((e)=>{
      return e.check;
    });
    
    this.state.allCheck = allCheck;
    let setContent = {
      arr,
      PPchangeCheck:this.PPchangeCheck
    }
  
    return (
      <div>
        <Header add={this.add}/>
        <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              checked={this.state.allCheck}
              onChange={this.changeAll.bind(this)}
            />
            <Content {...setContent}/>
        </section>
        <Footer />
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

  
  changeAll(){
    let {arr} = this.state;
    
    arr.forEach((e)=>{
      e.check = !this.state.allCheck
    });
    this.setState({
      arr
    });
    
  }
  
  PPchangeCheck(data){
    let {arr} = this.state;
    
    arr.forEach((e)=>{
      if(e.id == data.id){
        e.check = !e.check;
      }
    });
    this.setState({
      arr
    })
  }
  
}

export default App;

