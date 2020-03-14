import React from 'react';
import logo from './images/logo.png';
import Quote from './Components/Quote.js'
import Loading from './Components/Loading.js'
import './App.css';
const proxy="https://cors-anywhere.herokuapp.com/"
const API="https://thesimpsonsquoteapi.glitch.me/quotes";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { quote: null };
    this.getQuote = this.getQuote.bind(this);
  }
  

  getQuote = async () => {
  
    const api_call =  await fetch (proxy + API);
    const response = await api_call.json();
    this.setState({quote : response})
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
          <Loading />
        ) : (
          <Quote quote={this.state.quote[0].quote} image={this.state.quote[0].image} character={this.state.quote[0].character}/>
        )}
        <div className="button-container">
        <button onClick={this.getQuote.bind(this)}>Get Quote</button>
        </div>
      </main>
    </div>
  ); }
}

export default App;
