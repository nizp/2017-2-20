import React,{Component} from 'react';
class Footer extends Component{
  render(){
    //:class="{selected:isSelected=='completed'}"
    let button = null;
    let {view,num,active} = this.props;
    console.log(active)
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
            <a
              href="#/all"
              className={(view==='/all')?'selected':''}
            >全部</a>
          </li>
          <li data-view="active">
            <a
              href="#/active"
              className={(view==='/active')?'selected':''}
            >未完成</a>
          </li>
          <li>
            <a
              href="#/completed"
                className={(view==='/completed')?'selected':''}
            >已完成</a>
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