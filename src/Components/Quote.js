import React, { Component } from 'react';
import homer from '../images/homer.png';
const API="https://thesimpsonsquoteapi.glitch.me/quotes";

export default class Quote extends Component{

    handleClick() {
        
        alert('Called function');
    }

render(){  

    return(
        <div className="quote-container">
            <div className="character-image">
        <img src={homer} alt="character" id="image"/>
        </div>
        <div className="characeter-quote">
        <h2 id="quote">"Five days?  But I’m mad now."</h2>
        <h5 id="character">- Homer Simpson</h5>
        <button onClick={this.handleClick.bind(this)}>Get Quote</button>
        </div>
        </div>
    )
}
}

 