import React from 'react';
import '../loading.css';
import loading from '../images/donut.gif'



const Loading = props => (  
 
        <div className="gif-container">
            <img src={loading} alt="loading" />
        </div>
);

 export default Loading;