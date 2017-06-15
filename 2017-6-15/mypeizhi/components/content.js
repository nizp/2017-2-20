import React,{Component} from 'react';
import Li from './li';
class Content extends Component{
  constructor(props){
    super(props);
    
    this.PchangeCheck = this.PchangeCheck.bind(this);
    
  }
  render(){
    
    let arr = this.props.arr;
    
    let arr2 = null;
    
    if(arr.length){
      arr2 = arr.map((e)=>{
        let data = {
          txt:e.txt,
          id:e.id,
          key:e.id,
          check:e.check,
          data:e,
          PchangeCheck:this.PchangeCheck
        }
        return <Li  {...data}/>;
      });
    }

    return (
      <div>
        <ul className="todo-list">
          {arr2}
        </ul>
      </div>
    )
  }
  
  PchangeCheck(data){
    // console.log(this.props)
    this.props.PPchangeCheck(data);
  }
  
}
export default Content;