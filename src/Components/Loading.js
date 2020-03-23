import React from 'react';
import '../loading.css';
import family from '../images/family.png'
import loading from '../images/donut.gif'



const Loading = props => (  
 
    <div>
    {props.hasButtonBeenClicked === false ? (
       
        <div className="image-container">
        <img src={family} alt="loading" />
    </div>
      ) : (
        <div className="gif-container">
        <img src={loading} alt="loading" />
    </div>
      )}

      </div>

        
);

 export default Loading;