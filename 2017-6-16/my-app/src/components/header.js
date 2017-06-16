import React,{Component} from 'react';
class Header extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            defaultValue=""
            ref="val"
            onKeyUp={this.keyUp}
          />
      </header>
    )
  }
  
  keyUp =(ev) =>{
    let that = this.refs.val;
    if(ev.keyCode == 13){
      if(!that.value)return;
      let obj = {
        check:false,
        txt:that.value,
        id:(+new Date)
      }
      //调用父类的创建函数
      this.props.add(obj);
      that.value = '';
    }
  }
}

export default Header;