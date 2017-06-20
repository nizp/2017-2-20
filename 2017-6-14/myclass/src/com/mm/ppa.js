import React, { Component } from 'react';
import logo2 from '../../1.JPG';

console.log(logo2)

class PPA extends Component {
  render() {
    return (
      <div className="App">
       <img src={logo2} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default PPA;
