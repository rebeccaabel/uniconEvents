import {useRef} from "react";

import {artists} from "./artistArray.jsx";

export default function () {


    function fetchDetails() {


        let fetchInputs = document.getElementsByTagName('input');

        for (let i = 0; i < fetchInputs.length; i++) {
            if (fetchInputs[i].value == '') {
                console.log(fetchInputs[i])
            }
        }
    }


    return <div className="payment-wrapper">

        <div className="payment-container">

            <div className="event-details">
                <h1> Event Details</h1>
                <p>{artists[0].title}</p>
                <p>{artists[0].location}</p>
                <p>{artists[0].date}</p>

            </div>
            {/*
            <img src="https://pyxis.nymag.com/v1/imgs/2cb/2e1/47a72da70b3f7a301273b06cac9ea615c8-06-bob-ross-painting.rsquare.w700.jpg" alt="bob ross"/>
*/}

            <img src={artists[0].image}></img>

            <div className="payment-details">

                <p>Total:
                    <label>
                        200kr
                    </label></p>
                <form className="date-form"><p>Name on Card</p><input type="text"
                                                                      placeholder="Input name here"/></form>
                <form className="date-form"><p>Card digits</p><input type="text"
                                                                     placeholder="Enter card number "/></form>

                <form className="date-form"><p>Expiration date</p><input
                    placeholder="mm/dd"/></form>
                <form className="date-form"><p>CVC</p><input type="text"
                                                             placeholder="123"/></form>
                <input type="radio" value="Male"/> Buy for a friend


            </div>


            <button onClick={fetchDetails}>Purchase</button>

        </div>

    </div>

}