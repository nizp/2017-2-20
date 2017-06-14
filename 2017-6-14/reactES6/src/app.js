import React,{Component} from 'react';
import Li from '../component/li';

//父组件。
class H1 extends Component{
  constructor(){
    super();
    this.state = {
      title:'小列表',
      arr:[1,2,3,4],
      num:4
    }
    this.click = this.click.bind(this);
  }
  render(){
    
    let {arr} = this.state;
    
    let arr2 = arr.map((e,i)=>{
      let data = {
        key:(+new Date+i),
        content:e
      }
      return <Li {...data} />
    });
    
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.click}>点我点我点我</button>
        <ul>
          {arr2}
        </ul>
      </div>
    )
  }
  click(){
    let {arr,num} = this.state;
    num ++;
    arr.push(num);
    this.setState({
      num:num,
      arr:arr
    });
  }
}
export default H1;