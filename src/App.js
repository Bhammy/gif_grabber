import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/search-5.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gif Grabber</h1>
        </header>
        <p>Go look up some gifs!</p>
        <Search />
      </div>
    );
  }
}

export default App;
