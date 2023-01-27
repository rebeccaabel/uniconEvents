import {artists} from "../components/Artistarray.jsx";
import React from "react";

export default function () {

    let price = artists[0].pricePerTicket;
    console.log(price)

    return <p>{price}</p>
}