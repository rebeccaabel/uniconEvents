import {Link} from "react-router-dom";
import DisplayArtistCardPayment from "./DisplayArtistCardPayment.jsx";
import CalculatePricePaymentpage from "./CalculatePricePaymentpage.jsx";
import FormPaymentDetails from "./FormPaymentDetails.jsx";


export default function () {

    return <div className="payment-wrapper">
        <div className="payment-container">
            <DisplayArtistCardPayment/>
            <div className="payment-details">
                <CalculatePricePaymentpage/>
                <FormPaymentDetails/>
            </div>
            <Link to={'/VerifiedPaymentPage'}>
                <button> Purchase</button>
            </Link>
        </div>
    </div>




    async function asyncCall() {

    }
}