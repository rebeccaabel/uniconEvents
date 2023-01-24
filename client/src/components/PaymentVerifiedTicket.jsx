import React from "react";
import {artists} from "./artistArray.jsx";
import "../PaymentVerifiedTicket.css";

function VerifiedCard(props){
    return(
        <div className="verified-ticket">

            <div className="header">
                <h1>Thanks for your purchase</h1>
            </div>


            <div className="card-img">
                <img src={artists[0].image}></img>
            </div>

            <div className="details">
            <p>{artists[0].title}</p>
            <p>{artists[0].location} - avicii arena</p>
            <p>{artists[0].date.toLocaleDateString('sv-SE')}</p>
            </div>

            <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=avicciarena&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

        </div>

    )
}



export default VerifiedCard;