import React from 'react';
import logo from './images/logo.png';
import Quote from './Components/Quote.js'
import Default from './Components/Default.js'
import './App.css';
const proxy="https://cors-anywhere.herokuapp.com/";
const API="https://thesimpsonsquoteapi.glitch.me/quotes";
const episodeAPI="https://frinkiac.com/api/search?q=";
const episodeInfoAPI = "https://frinkiac.com/api/caption?e="


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isQuoteShowing : false,
                   quote: null,
                   episode: null,
                   episodeInfo: null };
    this.getQuote = this.getQuote.bind(this);
    this.getEpisode = this.getEpisode.bind(this);
    this.getEpisodeInfo = this.getEpisodeInfo.bind(this);
  }
  
  getEpisode = async () => {
    const api_call =  await fetch (proxy + episodeAPI + this.state.quote[0].quote);
    const response = await api_call.json();
    this.setState({episode : response, })
    this.getEpisodeInfo();
  }

  getEpisodeInfo = async () => {
    const api_call = await fetch (proxy + episodeInfoAPI + this.state.episode[0].Episode + "&t=" + this.state.episode[0].Timestamp);
    const response = await api_call.json();
    this.setState({episodeInfo : response, })
    this.setState({isQuoteShowing: true})
    return;
  }

  getQuote = async () => {
    const api_call =  await fetch (API);
    const response = await api_call.json();
    this.setState({quote : response, })
    this.getEpisode();
  }
   

render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Simpsons logo" className="logo"/>
      </header>
      <main>
        <h1>Quote Generator</h1>
        {this.state.isQuoteShowing === false ? (
          <Default />
        ) : (
          <Quote quote={this.state.quote[0].quote} image={this.state.quote[0].image} character={this.state.quote[0].character} episodeNumber={this.state.episodeInfo.Episode.Key} episodeTitle={this.state.episodeInfo.Episode.Title} />
        )}
          <div className="button-container">
        <button onClick={this.getQuote.bind(this)}>Get Quote</button>
        </div>
      </main>
    </div>
  ); }
}

export default App;
