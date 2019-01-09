import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Weather App</h1>
          <Weather/>
        </header>
      </div>
    );
  }
}

export default App;
