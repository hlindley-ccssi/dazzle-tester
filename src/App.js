import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyDataContainer from './myData/containers/MyDataContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
         <MyDataContainer/>
      </div>
    );
  }
}

export default App;
