
import arena from "../images/Section.png"
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {sectionAtickets, sectionBtickets, sectionCtickets, sectionDtickets} from "./Sectionpricing.jsx";
import {useRef} from "react";


export default function () {
    function chooseNumberOfSeats () {
        let selectedTickets = useRef(null);

        return <>
            <select ref={selectedTickets}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <p>Selected amount of seats: {selectedTickets}</p>
        </>
    }
    return <>
        <div className="all-wrapper">
            <div className="section-wrapper">
                <img src={arena} alt="arena-image"/>
                <div className="pricing-wrapper">
                    <div className="green-section">
                        <h3>Section A </h3><p>- 30$ per ticket. Seated section. </p>
                        {chooseNumberOfSeats()}
                        <Link to="/Paymentpage">
                            <button onClick ={ () => {sectionAtickets({selectedTickets})}}>Proceed to payment</button>
                        </Link>
                    </div>
                    <div className="blue-section">
                        <h3>Section B </h3><p>  - 40$ per ticket. Seated section. </p>
                        {chooseNumberOfSeats()}
                        <Link to="/Paymentpage">
                            <button onClick ={sectionBtickets}>Proceed to payment</button>
                        </Link>
                    </div>
                    <div className="purple-section">
                        <h3>Section C </h3><p>- 60$ per ticket. Seated section. </p>
                        {chooseNumberOfSeats()}
                        <Link to="/Paymentpage">
                            <button onClick ={sectionCtickets}>Proceed to payment</button>
                        </Link>
                    </div>
                    <div className="red-section">
                        <h3>Section D </h3><p>- 80$ per ticket. This is the standing section.</p>
                        {chooseNumberOfSeats()}
                        <Link to="/Paymentpage">
                            <button onClick ={sectionDtickets}>Proceed to payment</button>
                        </Link>
                    </div>
                </div>
            </div>
            <i>*  Please note that you can only purchase tickets for one section at once. If you wish to purchase tickets
                for multiple sections, you will have to split your booking into multiple sessions. No need to grieve, you have probably had worse problems than this. </i>
        </div>
    </>
}