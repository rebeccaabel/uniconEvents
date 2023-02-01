import {artists} from "../components/Artistarray.jsx"
import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function () {

    let numberOfSeats = artists[0].totalSeats + 1;
    let seats = [];
    let chosenSeats = [];

    for (let i = 1; i < numberOfSeats; i++) {
        seats.push(ClickBtn(i));
    }

    function ClickBtn(input) {
        const [active, setActive] = useState(false);
        const handleClick = () => {
            setActive(!active);
        };
        const checkSeat = () => {

            for (let i = 0; i < seats.length; i++) {

                if (seats[i].props.className === "black-btn") {
                    chosenSeats.push(seats[i].props.value);
                    console.log(chosenSeats)
                }
            }
        }

        return <button value={input} onClick={() => {
            checkSeat();
            handleClick()
        }} className={active ? "black-btn" : "white-btn"}>{input}</button>
    }

    return <>
        <div id="seated-area">
            <h4>This is the seated area. Please choose your preferred seats.</h4>
            <div>
                {seats}
            </div>
            <Link to={"/Paymentpage"}>
                <button id="Proceed-Payment-button">Proceed to payment</button>
            </Link>
        </div>
    </>
}