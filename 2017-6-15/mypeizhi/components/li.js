import React,{Component} from 'react';
class Li extends Component{
  render(){
    return (
      <li className={this.props.check?'completed':''}>
          <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={this.props.check}
                onChange={this.changeCheck.bind(this)}
              />
              <label>{this.props.txt}</label>
              <button className="destroy"></button>
          </div>
          <input
            className="edit"
          />
      </li>
    )
  }
  changeCheck(){
    this.props.PchangeCheck(this.props.data);//当前的数据
  }
  
}
export default Li;