import React from 'react';
import Loading from '../Components/Loading'
import '../quote.css';




const Quote = props => (  


        <div className="quote-container">
            <div className="character-image">
       
          <img src={props.image} alt="character" id="image"/>

        
        </div>
        <div className="character-quote">
        <h2 id="quote">"{props.quote}"</h2>
        <h5 id="character">- {props.character}</h5>
        <h5 id="episode-info">{props.episodeNumber} | {props.episodeTitle}</h5>
        </div>
       
        </div>
);

 export default Quote;