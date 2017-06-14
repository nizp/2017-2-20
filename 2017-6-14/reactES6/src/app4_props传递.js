import React, { Component } from 'react';
var num2 = 10;
class H1 extends Component {
  constructor(props){
    //写constructor必须写super不然要报错
    //外界传递的数据通过props参数来接收
    super(props);
    //初始化状态:控制器
    this.state = {
      num:0,
      arr:this.props.arr
    }
    
    //console.log(this.props.arr)
    
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
        <button onClick={this.click}>{this.state.arr}:{this.props.arr}</button>
        <ul>
          {
            arr2
          }
        </ul>
      </div>
    )
  }
  click(){
    this.state.arr.push(5);
    this.setState({
      num : ++ this.state.num,
      arr: this.state.arr
    });
    console.log(this.props.arr);
  }
};
export default H1;