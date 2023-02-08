
import {useEffect, useState, useContext} from "react";
import GlobalContext from "./GlobalContext.jsx";

export default function () {
    const {chosenSeats} = useContext(GlobalContext)
    const {standingTickets} = useContext(GlobalContext);
    const numberOfSeats = chosenSeats.length;
    let priceSeats = numberOfSeats * 500;
    let priceStanding = standingTickets*250;
    let total = priceSeats+ priceStanding;
    let newSeats = chosenSeats.join(", ")

    return <>
        <p>Price per ticket for the seated area: 500</p>
        <p>Total (seated area): {priceSeats}</p>
        <p>Price per ticket for the standing area: 250</p>
        <p>Total (standing area): {priceStanding}</p>
        <p>The total amount will be {total}</p>
        <p>Your seatnumbers are {newSeats}</p>
        </>
}