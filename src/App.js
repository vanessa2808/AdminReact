import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Pane from './Pane';
import Login from './Login';
import Footer from './Footer';
import Home from './Home';
class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Menu />
  <Home />
       
       
        <div className="clear" />
 
        <Login />
 
        <div className="clear" />
        <Footer />
       
      </div>
    );
  }
}
 
export default App;