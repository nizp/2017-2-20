import React,{Component} from 'react';
class Header extends Component{
  constructor(){
    super();
    this.state = {
      val:''
    };
  }
  render(){
    return (
      <header className="header" >
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="请输入内容"
            value={this.state.val}
            onChange={this.changeVal.bind(this)}
            onKeyUp={this.keyUp.bind(this)}
          />
      </header>
    )
  }
  
  changeVal(ev) {
    //console.log(this)
    this.setState({
      val:ev.target.value
    });
  }
  
  keyUp(ev){
    let that = ev.target;
    if(ev.keyCode == 13){
      if(!that.value)return;
      let obj = {
        check:false,
        txt:this.state.val,
        id:(+new Date)
      }
      this.props.add(obj);
      this.setState({
        val:''
      });
    }
    
  }
  
  
}

export default Header;