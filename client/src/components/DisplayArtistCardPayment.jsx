import {artists} from "./artistArray.jsx";

export default function () {
    return <div className="event-details">
        <h1> Event Details</h1>
        <p>{artists[0].title}</p>
        <p>{artists[0].location}</p>
        <p>{artists[0].date.toLocaleDateString('sv-SE')}</p>
        <img src={artists[0].image}></img>
    </div>


}