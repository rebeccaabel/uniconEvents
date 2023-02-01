import Price from "./PriceCalculation.jsx";
import {Link} from "react-router-dom";
import PriceCalculation from "../Components/PriceCalculation.jsx"
export default function () {
    return <>
        <div id="price-ticket-button">
            <p>You have chosen  amount of tickets for the seated area.</p>
            <p>You have chosen xx tickets for the standing area</p>
            <p>The price of your tickets will be: <PriceCalculation/> kr</p>
            <Link to={"./Paymentpage.jsx"}>
                <button>Proceed to payment</button>
            </Link>
        </div>
    </>
}