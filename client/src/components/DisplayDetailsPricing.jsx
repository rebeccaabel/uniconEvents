import Price from "./PriceCalculation.jsx";
import {Link} from "react-router-dom";


export default function () {
    return <>
        <div id="price-ticket-button">
            <p>You have chosen  amount of tickets for the seated area.</p>
            <p>You have chosen xx tickets for the standing area</p>
            <p>The price of your tickets will be: <Price/> kr</p>
            <Link to={"/Paymentpage"}>
                <button>Proceed to payment</button>
            </Link>
        </div>
    </>
}