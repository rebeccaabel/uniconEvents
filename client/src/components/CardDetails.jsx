import {Link} from "react-router-dom";
import DisplayArtistCardPayment from "../components/DisplayArtistCardPayment";
import CalculatePricePaymentpage from "../components/CalculatePricePaymentpage.jsx";
import FormPaymentDetails from "../components/FormPaymentDetails.jsx";



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