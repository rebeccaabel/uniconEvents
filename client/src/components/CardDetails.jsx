import {  useRef } from "react";


export default function () {




    function fetchDetails() {


        let fetchInputs = document.getElementsByTagName('input');

        for(let i = 0; i < fetchInputs.length; i++) {
            if(fetchInputs[i].value=='') {
                console.log(fetchInputs[i])
            }
        }
    }

    return <div className="payment-wrapper">
        <div className="payment-container">

            <div className="event-details">Event Details
                <p>stres tipogràfiques. No només ha sobreviscut cinc segles, sinó que ha fet el salt cap a la creació de tipus de lletra electrònics, romanent essencialment sense canvis. Es va popularitzar l'any 1960 amb el llançament de fulls Letraset que contenien passatges de Lorem Ipsum, i més recentment amb programari d'autoedició com Aldus Pagemaker que inclou versions de Lorem Ipsum.</p></div>
            <img src="https://pyxis.nymag.com/v1/imgs/2cb/2e1/47a72da70b3f7a301273b06cac9ea615c8-06-bob-ross-painting.rsquare.w700.jpg" alt="bob ross"/>


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
                <input type="radio" value="Male"  /> Buy for a friend


            </div>


            <button onClick={fetchDetails} >Purchase</button>

        </div>

    </div>

}