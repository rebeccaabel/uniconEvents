import { useContext } from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const { chosenSeats } = useContext(GlobalContext);
    const { standingTickets } = useContext(GlobalContext);
    const numberOfSeats = chosenSeats.length;
    let { priceSeats, priceStanding, total, newSeats } = calcSeats();

    return <div id="payment-details">
        <p>Total (seated area): {priceSeats} sek</p>
        <p>Total (standing area): {priceStanding} sek</p>
        <p>The total amount will be {total} sek</p>
        <p>Your seatnumbers are {newSeats}</p>
    </div>

    function calcSeats() {
        let priceSeats = numberOfSeats * 500;
        let priceStanding = standingTickets * 250;
        let total = priceSeats + priceStanding;
        let newSeats = chosenSeats.join(", ");
        return { priceSeats, priceStanding, total, newSeats };
    }
}