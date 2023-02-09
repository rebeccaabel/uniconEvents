import React from "react";

import "../../styles/PaymentVerifiedTicket.css";
import Map from "../GoogleMaps.jsx";
import TitleArtistHub from "../eventComponents/TitleEventHub.jsx";
import LocationArtistHub from "../eventComponents/LocationEventHub.jsx";
import ImageArtistHub from "../eventComponents/ImageEventHub.jsx";
import CalculatePricePaymentpage from "./CalculatePricePaymentpage.jsx";

function VerifiedCard() {
    return (
        <div className="verified-ticket">
                <h1>Thank you for your purchase!</h1>
            <h2>Your Ticket</h2>
            <img style={{width:"50px", height:"50px"}} src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100" alt="" title="" />
                <CalculatePricePaymentpage/>
                <ImageArtistHub/>
            <div className="details">
                <TitleArtistHub/>
                <LocationArtistHub/>
                <button id={"print-button"} onClick={printTicket}>Print out ticket</button>
            </div>
            <Map/>
        </div>

    )
    function printTicket(){
    window.print()
    }
}
export default VerifiedCard;