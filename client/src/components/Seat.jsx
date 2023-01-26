
import {artists} from "../components/Artistarray.jsx"
export default function () {

    let numberOfSeats = artists[0].totalSeats + 1;
    let seats = [];
    for (let i =1; i<numberOfSeats; i++) {
        seats.push(i);
    }

    const buttons = seats.map(seat => <button key={seat}>{seat}</button>)
    return <>
        <div>
            {buttons}
        </div>
    </>
}