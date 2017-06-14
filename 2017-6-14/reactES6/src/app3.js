import React, { Component } from 'react';
class H1 extends Component {
  constructor(){
    super();
    //初始化状态:控制器
    this.state = {
      num:1,
      arr:[1]
    }
    //如果在初始化的时候不bind事件函数，那么默认事件函数的this为null（官方规定）
    this.click = this.click.bind(this);//apply
  }
  render(){
    const {arr} = this.state;
    
    let arr2 = null;
    if(arr.length){
      arr2 = arr.map((e,i)=>{
        return <li key={i}>{e}</li>
      });
    }
    
    return (
      <div>
        <h1>你好世界!</h1>
        <button onClick={this.click}>{this.state.num}</button>
        <ul>
          {
            arr2
          }
        </ul>
      </div>
    )
  }
  click(){
    
    let {arr,num} = this.state;
    
    num ++;
    arr.push(num);
    
    this.setState({
      num : num,
      arr:arr
    });
  }
};
export default H1;