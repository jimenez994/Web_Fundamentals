import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './Componets/layout/Navbar';
import Footer from './Componets/layout/Footer';
import Landing from './Componets/layout/Landing';
import GridP from './Views/GridP'
import './App.css';


class App extends Component {
  render() {
    return (
      <Router> 
        <div className="App">
          <Navbar/>
          < div className = "container" >
            <Route exact path="/" component={Landing} />
            <Route exact path="/material-ui" component={GridP} />
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
