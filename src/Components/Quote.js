import React, { Component } from 'react';
import homer from '../images/homer.png'

export default class Quote extends Component{

render(){

  

    return(
        <div className="quote">
        <img src={homer} alt="character"/>
        <h2>"Five days?  But I’m mad now."</h2>
        <h5>- Homer Simpson</h5>
        <button>Get Quote</button>
        </div>
    )
}
}

 