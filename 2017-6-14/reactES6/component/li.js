import React, { Component } from 'react';

class Li extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <li>{this.props.content}</li>
    )
  }
}
export default Li;
