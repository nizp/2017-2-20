import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Footer extends Component{
  render(){
    //:class="{selected:isSelected=='completed'}"
    let button = null;
    let {view,num,active} = this.props;
    
    if(active){
      button = (
        <button
          className="clear-completed"
          onClick={this.clear}
        >
            清除完成项
        </button>
      )
    }
    
    
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{num}</strong>
          <span>条未选中</span>
        </span>
        <ul className="filters" onClick={this.changeView}>
          <li>
            <Link
              to="/all"
              className={(view==='/all')?'selected':''}
            >
              全部
            </Link>
          </li>
          <li data-view="active">
            
          <Link
            to="/active"
            className={(view==='/active')?'selected':''}
          >
            未完成
          </Link>
          </li>
          <li>
          
          <Link
            to="/completed"
            className={(view==='/completed')?'selected':''}
          >
            已完成
          </Link>
          </li>
        </ul>
        {button}
      </footer>
    )
  }
  
  clear = () => {
    this.props.clear();
  }
  
  changeView = (ev) => {
    if(ev.target.tagName == 'A'){
      let h = ev.target.href.split('#')[1];
      this.props.setView(h);
    }
  }
}
export default Footer;