import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Rome"
          country="Italy"
          photo="https://image.ibb.co/n38rp9/Webp_net_resizeimage.jpg"
          distance="1 446 km"
        
          />
         <Travel
          destination="Quebec"
          country="Canada"
          photo="https://image.ibb.co/dzr8K9/Webp_net_resizeimage_2.jpg"
          distance="6 611 km"
          />
      </div>
    );
  }
}

export default App;
