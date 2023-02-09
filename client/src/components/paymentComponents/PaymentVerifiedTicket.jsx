import React from "react";

import "../../styles/PaymentVerifiedTicket.css";
import Map from "../GoogleMaps.jsx";
import TitleArtistHub from "../eventComponents/TitleEventHub.jsx";
import LocationArtistHub from "../eventComponents/LocationEventHub.jsx";
import ImageArtistHub from "../eventComponents/ImageEventHub.jsx";
import CalculatePricePaymentpage from "./CalculatePricePaymentpage.jsx";

function VerifiedCard(props) {
    return (
        <div className="verified-ticket">
                <h1>Thank you for your purchase!</h1>
                <CalculatePricePaymentpage/>
                <ImageArtistHub/>
            <div className="details">
                <TitleArtistHub/>
                <LocationArtistHub/>
                <button onClick={printTicket}></button>
            </div>
            <Map/>
        </div>

    )
    function printTicket(){
    window.print()
    }
}
export default VerifiedCard;