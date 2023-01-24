
import {artists} from "./artistArray.jsx";
import {Link} from "react-router-dom";
import PaymentVerifiedTicket from "./PaymentVerifiedTicket.jsx";
import { useState } from "react";



export default function () {

    const [name, setName] = useState('');
    const [digits, setDigits] = useState('');
    const  [date, setDate] = useState('')
    const [cvc, setCvc] = useState('')

    function PurchaseButton() {
        if (name && digits && date && cvc) {
            return <button className="button-purchase" type="button">Purchase</button>
        } else {
            return <button className="button-disabled" type="button" disabled> Purchase</button>
        }
    }

    return <div className="payment-wrapper">

        <div className="payment-container">

            <div className="event-details">
                <h1> Event Details</h1>
                <p>{artists[0].title}</p>
                <p>{artists[0].location}</p>
                <p>{artists[0].date.toLocaleDateString('sv-SE')}</p>

            </div>

            <img src={artists[0].image}></img>

            <div className="payment-details">

                <p>Total:
                    <label>
                        200kr
                    </label></p>
                <form className="date-form"><p>Name on Card</p><input value={name} onChange={event => setName(event.target.value)} type="text" placeholder="Input name here"/></form>
                <form className="date-form"><p>Card digits</p><input value={digits} onChange={event => setDigits(event.target.value)} type="text" placeholder="Enter card number "/></form>

                <form className="date-form"><p>Expiration date</p><input value={date} onChange={event => setDate(event.target.value)} placeholder="mm/dd"/></form>
                <form className="date-form"><p>CVC</p><input value={cvc} onChange={event => setCvc(event.target.value)} type="text" placeholder="123"/></form>
                <input type="radio" /> Buy for a friend

            </div>



            <Link to={'/VerifiedPaymentPage'}><PurchaseButton/></Link>

        </div>

    </div>

}