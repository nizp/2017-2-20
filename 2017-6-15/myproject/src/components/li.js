import React,{Component} from 'react'

class Li extends Component {
  constructor(props){
    super(props);
    this.changCed = this.changCed.bind(this);
    this.changeVal = this.changeVal.bind(this);
  }
  render(){
    let active = this.props.check?'active':'';
    let add = 'add';
    
    if(active){
      active = active + ' ' + add;
    }else{
      active = add;
    }
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.check}
          onChange={this.changCed}
        />
        <p className={active} >{this.props.txt}</p>
        
        <input
          type="text"
          value={this.props.txt}
          onChange={this.changeVal}
          ref="hehe"
        />
      </li>
    );
  }
  changCed(){
    this.props.checkFn(this.props.val);
  }
  //当输入内容的时候调用父组件中的checkV这个方法
  changeVal(ev){
    // console.log(this.refs.hehe.value);
    this.props.checkV(this.props.val,this.refs.hehe.value);
    // this.props.checkV(this.props.val,ev.target.value);
  }
}

export default Li;

