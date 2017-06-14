import React, { Component } from 'react';
class H1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      num:0,
      arr:this.props.arr
    }
    
    console.log(this.props.num);
    
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
        <button>{this.props.arr}</button>
        <ul>
          {
            arr2
          }
        </ul>
      </div>
    )
  }
};
export default H1;