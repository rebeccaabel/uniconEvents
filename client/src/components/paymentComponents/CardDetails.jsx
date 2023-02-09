import {Link} from "react-router-dom";
import CalculatePricePaymentpage from "./CalculatePricePaymentpage.jsx";
import FormPaymentDetails from "./FormPaymentDetails.jsx";
import ImageArtistHub from "../eventComponents/ImageEventHub.jsx";

export default function () {

    return <div className="payment-wrapper">
        <div className="payment-container">
            <ImageArtistHub/>
            <div className="payment-details">
                <CalculatePricePaymentpage/>
                <FormPaymentDetails/>
            </div>

        </div>
    </div>
}