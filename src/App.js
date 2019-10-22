import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Pane from "./Pane";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (

      <div id="wrapper">
     
        <Menu />
        
       <Pane  />
       
        <div className="clear" />
 
      
 
        <div className="clear" />
        <Footer />
       
      </div>
    );
  }
}
 
export default App;