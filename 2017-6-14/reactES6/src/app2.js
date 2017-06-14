import React, { Component } from 'react';
class H1 extends Component {
  constructor(){
    super();
    
    //初始化状态:
    this.state = {
      num:0,
      arr:[1,2,3,4,5]
    }
    //如果在初始化的时候不bind事件函数，那么默认事件函数的this为null（官方规定）
    this.click = this.click.bind(this);//apply
  }
  render(){
    const {arr} = this.state;
    return (
      <div>
        <h1>你好世界!</h1>
        <button onClick={this.click}>{this.state.num}</button>
        <ul>
          {
            arr.map((e,i)=>{
              return <li key={i}>{e}</li>
            })
          }
        </ul>
      </div>
    )
  }
  click(){
    console.log(this);
    this.setState({
      num : ++ this.state.num
    });
  }
};
export default H1;