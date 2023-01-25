
import {artists} from "./artistArray.jsx";

export default function () {

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
                <form className="date-form"><p>Name on Card</p><input type="text" placeholder="Input name here"/></form>
                <form className="date-form"><p>Card digits</p><input type="text" placeholder="Enter card number "/></form>

                <form className="date-form"><p>Expiration date</p><input placeholder="mm/dd"/></form>
                <form className="date-form"><p>CVC</p><input type="text" placeholder="123"/></form>
                <input type="radio" /> Buy for a friend

            </div>

            <button onClick={clearInput}>Purchase</button>

        </div>

    </div>

}