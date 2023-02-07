import React from "react";
import { artists } from "./artistArray.jsx";
import "../styles/PaymentVerifiedTicket.css";

import Map from "../components/GoogleMaps.jsx";

function VerifiedCard(props) {
    return (
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

            <Map/>

        </div>

    )
}



export default VerifiedCard;