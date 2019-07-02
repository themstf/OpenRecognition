import React from 'react';
import logo from './logo.svg';
import './App.css';

import the_api from "./demo-dummy-api/get.json";
import book from "./demo-dummy-api/books/id/get.json";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {the_api}  <br />
          {book[0].title}
        </p>
      </header>
    </div>
  );
}

export default App;
