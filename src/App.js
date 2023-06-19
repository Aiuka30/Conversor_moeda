import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Conversor from "./components/conversor";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
    );
  }
}

export default App;
