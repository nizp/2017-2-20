import React, { Component } from 'react';
import logo from './logo.svg';
import one from './1.jpg';
import './App.css';
import PPA from './com/mm/ppa';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>你好！世界!!......</h2>
          <img src={require('./1.JPG')} />
          
        </div>
        
       	<PPA />
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
