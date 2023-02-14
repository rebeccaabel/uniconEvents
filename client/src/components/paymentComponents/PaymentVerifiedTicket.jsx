import React from "react";
import "../../styles/PaymentVerifiedTicket.css";
import CalculatePricePaymentpage from "./CalculatePricePaymentpage.jsx";
import ImagePaymentpage from "./ImagePaymentpage.jsx";
import GoogleMaps from "../GoogleMaps.jsx";
import TitlePaymentpage from "./TitlePaymentpage.jsx";
import AdditionalEventDetails from "./AdditionalEventDetails.jsx";

function VerifiedCard() {
    return <div className="verified-ticket">
        <h1>Thank you for your purchase!</h1>
        <ImagePaymentpage/>
        <div id ="details-box">
        <TitlePaymentpage/>
        <AdditionalEventDetails/>
        <h2>Your Ticket</h2>
        <img id={"qr-code"}
             src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.youtube.com/watch?v=KlqpFH3b-c4&amp;size=100x100"
             alt="" title=""/>
        <CalculatePricePaymentpage/>
        </div>
        <div className="details">
            <button id={"print-button"} onClick={printTicket}>Print out ticket</button>
        </div>
        <GoogleMaps/>
    </div>

    function printTicket() {
        window.print()
    }
}

export default VerifiedCard;