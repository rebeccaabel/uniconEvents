import React from "react";
import "../../styles/PaymentVerifiedTicket.css";
import TitleArtistHub from "../eventComponents/TitleEventHub.jsx";
import LocationArtistHub from "../eventComponents/LocationEventHub.jsx";
import ImageArtistHub from "../eventComponents/ImageEventHub.jsx";
import CalculatePricePaymentpage from "./CalculatePricePaymentpage.jsx";
import ImagePaymentpage from "./ImagePaymentpage.jsx";
import GoogleMaps from "../GoogleMaps.jsx";

function VerifiedCard() {
    return <div className="verified-ticket">
                <h1>Thank you for your purchase!</h1>
            <ImagePaymentpage/>
            <h2>Your Ticket</h2>
            <img style={{width:"50px", height:"50px"}} src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.youtube.com/watch?v=KlqpFH3b-c4&amp;size=100x100" alt="" title="" />
                <CalculatePricePaymentpage/>
            <div className="details">
                <button id={"print-button"} onClick={printTicket}>Print out ticket</button>
            </div>
            <GoogleMaps/>
        </div>
    function printTicket(){
    window.print()
    }
}
export default VerifiedCard;