import React from 'react';
import homer from '../images/homer.png'
import '../quote.css';



const Quote = props => (  
 
        <div className="quote-container">
            <div className="character-image">
        {props.image === null ? (
          <img src={homer} alt="character" id="image"/>
        ) : (
            <img src={props.image} alt="character" id="image"/>
        )}
        
        </div>
        <div className="character-quote">
        <h2 id="quote">{props.quote}</h2>
        <h5 id="character">{props.character}</h5>
        </div>
        </div>
);

 export default Quote;