import fn1 from './src/app';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// class H1 extends React.Component {
// https://discountry.github.io/react
class H1 extends Component {
  constructor(){
    super();
    
    //初始化状态:
    this.state = {
      num:0
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
    return (
      <div>
        <h1>你好世界!</h1>
        <button onClick={this.click}>{this.state.num}</button>
      </div>
    )
  }
}
ReactDOM.render(<H1 />,document.getElementById('app'));

console.log(React,ReactDOM,React.Component);