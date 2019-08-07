import React, { Component } from 'react';
import './App.css';
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

class App extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to Shoply!</h3>
        <ShoppingCart />
        <Products />
      </div>
    )
  }
}

export default App;

//TODO refactor so that products data lives in state instead of in json aka just import json to renderer and add it to initial state