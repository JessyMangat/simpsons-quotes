import React from 'react';
import logo from './images/logo.png';
import Quote from './Components/Quote.js'
import './App.css';
const proxy="https://cors-anywhere.herokuapp.com/"
const API="https://thesimpsonsquoteapi.glitch.me/quotes";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { quote: null };
    this.getQuote = this.getQuote.bind(this);
  }
  
  testFunction(){
    console.log(this.state.quote[0].quote)
  }

  getQuote = async () => {
  
    const api_call =  await fetch (proxy + API);
    const response = await api_call.json();
    this.setState({quote : response})
    this.testFunction();
    return ;
  }

render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Simpsons logo" className="logo"/>
      </header>
      <main>
        <h1>Quote Generator</h1>
        {this.state.quote === null ? (
          <Quote quote="Five days? But i'm mad now!" image="./images/homer.png" character="- Homer Simpson" />
        ) : (
          <Quote quote={this.state.quote[0].quote} image={this.state.quote[0].image} character={this.state.quote[0].character}/>
        )}
        <button onClick={this.getQuote.bind(this)}>Get Quote</button>
      </main>
    </div>
  ); }
}

export default App;
