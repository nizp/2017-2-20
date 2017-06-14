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
  
  click(){
    console.log(this);
    this.setState({
      num : ++ this.state.num
    });
  }
  render(){
    
    const {arr} = this.state;
    //遍历数据，把Li渲染到页面
    let arr2 = arr.map((e,i)=>{
      let data = {
        key:(+new Date+i)
      }
      return <li {...data}>{e}</li>
    });
    
    
    return (
      <div>
        <h1>你好世界!</h1>
        <button onClick={this.click}>{this.state.num}</button>
        <ul>
          {arr2}
        </ul>
      </div>
    )
  }
};
export default H1;