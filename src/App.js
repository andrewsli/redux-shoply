import React, { Component } from 'react';
import './App.css';
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to Shoply!</h3>
        <Products />
      </div>
    )
  }
}

export default App;
