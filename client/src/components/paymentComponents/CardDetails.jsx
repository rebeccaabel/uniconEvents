import {Link} from "react-router-dom";
import CalculatePricePaymentpage from "./CalculatePricePaymentpage.jsx";
import FormPaymentDetails from "./FormPaymentDetails.jsx";
import ImageArtistHub from "../eventComponents/ImageEventHub.jsx";
import ImagePaymentpage from "./ImagePaymentpage.jsx";
import TitlePaymentpage from "./TitlePaymentpage.jsx";

export default function () {

    return <div className="payment-wrapper">
        <div className="payment-container">
            <ImagePaymentpage/>
            <TitlePaymentpage/>
            <div className="payment-details">
                <CalculatePricePaymentpage/>
                <FormPaymentDetails/>
            </div>
        </div>
    </div>
}