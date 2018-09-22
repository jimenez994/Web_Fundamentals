import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './Componets/layout/Navbar';
import Footer from './Componets/layout/Footer';
import Landing from './Componets/layout/Landing';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router> 
        <div className="App">
          <Navbar/>
          < div className = "container" >
            <Landing/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
