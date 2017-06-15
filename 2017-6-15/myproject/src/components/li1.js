import React,{Component} from 'react';

/*
  react中的表单：
    1.标签必须闭合,
    2.受控组件：
      状态一变它就变
      一开始会走数据，
      这个组件如何默认定义了一个值，定义之后就不会被用户操作所改变
      既然是动态组件用户操作会改变数据，在操作这个元素的时候
      就应该绑一个事件去监听。如果不绑定那么就报错，不过不影响
      渲染。
      
      
    3.非受控组件
      一开始可以定义一个选中状态，这个状态是可以被用户直接
      操作的。
      
      checed  -> defaultChecked
      text -> defaultValue
      
      

*/

class Li extends Component {
  constructor(props){
    super(props);
    this.changCed = this.changCed.bind(this);
    this.changeVal = this.changeVal.bind(this);
  }
  render(){
    return (
      <li>
        <input
          type="checkbox"
          // defaultChecked
          checked={this.props.check}
          onChange={this.changCed}
        />
        <p>{this.props.txt}</p>
        <input
          type="text"
          value={this.props.txt}
          onChange={this.changeVal}
          // defaultValue="1231232"
        />
      </li>
    );
  }
  changCed(){
    // console.log();
    this.props.checkFn(this.props.val);
  }
  changeVal(ev){
    this.props.checkV(this.props.val,ev.target.value);
    // console.log(ev.target.value);
  }
  
}

export default Li;

