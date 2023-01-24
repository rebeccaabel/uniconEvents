import React from "react";
import {artists} from "./artistArray.jsx";

function VerifiedCard(props){
    return(
        <div className="event-details">
            <h1>Thanks for purchase, here is your ticket: </h1>
            <p>{artists[0].title}</p>
            <p>{artists[0].location}</p>
            <p>{artists[0].date.toLocaleDateString('sv-SE')}</p>

    <img src={artists[0].image}></img>
        </div>



    )
}



export default VerifiedCard;