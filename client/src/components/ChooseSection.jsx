import Buttons from "../Components/Seat.jsx"
import {Link} from "react-router-dom"

export default function () {
    return <>
        <div id="outer-div1">
        <div id="outer-div">
            <div id="stage-area"><h1>STAGE</h1></div>
            <div id="standing-area"><h2>STANDING AREA</h2></div>
            <div id="seated-area">
                <h4>This is the seated area. Please choose your preferred seats.</h4>
                <Buttons/>
            </div>
            <div id="price-ticket-button">

                <p>You have chosen seats number: x, y, z for the seated area</p>
                <p>You have chosen x amount of tickets for the standing area</p>
                <p>The price of your tickets will be: xxx kr</p>

                <Link to={"/Paymentpage.jsx"}>
                    <button>Proceed to payment</button>
                </Link>
            </div>
        </div>
        </div>
    </>
}