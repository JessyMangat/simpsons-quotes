import React from 'react';
import logo from './images/logo.png';
import Quote from './Components/Quote.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Simpsons logo" className="logo"/>
      </header>
      <main>
        <h1>Quote Generator</h1>
        <Quote/>
      </main>
    </div>
  );
}

export default App;
