import React,{Component} from 'react';
class Select extends Component{
  render(){
    return (
      <select defaultValue="北京">
        <option>上海</option>
        <option>北京</option>
        <option>东莞</option>
      </select>
    );
  }
}
export default Select;
