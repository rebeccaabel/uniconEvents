import CalculatePricePaymentpage from "./CalculatePricePaymentpage.jsx";
import FormPaymentDetails from "./FormPaymentDetails.jsx";
import ImagePaymentpage from "./ImagePaymentpage.jsx";
import TitlePaymentpage from "./TitlePaymentpage.jsx";
import AdditionalEventDetails from "./AdditionalEventDetails.jsx";


export default function () {

    return <div className="payment-wrapper">
        <div className="payment-container">
            <TitlePaymentpage/>
            <AdditionalEventDetails/>
            <ImagePaymentpage/>
            <div className="payment-details">
                <CalculatePricePaymentpage/>
                <FormPaymentDetails/>
            </div>
        </div>
    </div>
}