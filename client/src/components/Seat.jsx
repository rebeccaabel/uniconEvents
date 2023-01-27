
import {artists} from "../components/Artistarray.jsx"
import React, { useState } from "react";

export default function () {

    let numberOfSeats = artists[0].totalSeats + 1;
    let seats = [];
    for (let i =1; i<numberOfSeats; i++) {
        seats.push(i);
    }
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    const buttons = seats.map(seat => <button onClick={handleClick} className={active ? "black-btn" : "white-btn"} key={seat}>{seat}</button>)
    return <>
        <div>
            {buttons}
        </div>
    </>
}