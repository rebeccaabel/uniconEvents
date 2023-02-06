import "../styles/ArtistHub.css";
import { artists } from "./artistArray.jsx";
import { Link } from "react-router-dom";
import Button from "../components/TicketButton.jsx";

import Map from "../components/GoogleMaps";


export default function () {

    let { fullYear, month, day } = GetDate();


    return <div className="artist-info-wrapper">

        <div>
            <h1 id="title">{artists[0].title}</h1>
        </div>

        <div className="artist-image">
            <img src={artists[0].image} />
        </div>

        <div className="description">
            <p>Here is where some information about the event are present.
                Here we can read in more detail what the event is all about...
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolor explicabo excepturi numquam earum et cumque, vel omnis facilis similique quos laudantium incidunt consectetur hic maxime porro aperiam corrupti non?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas voluptate assumenda esse. Asperiores rem quam maiores error vitae sequi ipsa, ex reiciendis itaque expedita aut, minima unde commodi adipisci?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium, temporibus quasi facere blanditiis possimus nostrum, a voluptates provident earum modi similique expedita vitae tenetur praesentium perspiciatis tempora officiis nulla!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ratione magnam praesentium dolorum id, dignissimos aperiam voluptates vitae cumque amet at corporis, aliquam voluptas fugit laboriosam ducimus provident nemo impedit.
                </p>
            </p>
        </div>

        <div className="present-artist-list">
            <h2>Artists Present</h2>
        </div>

        <div className="location">
            <h2>Date: {fullYear}-{month}-{day}</h2>
            <h2>Location: {artists[0].location}</h2>
        </div>

        <div className="ticket">
            <h2>Tickets Remaining: {artists[0].availableSeats} / {artists[0].totalSeats}</h2>
            <h2>Price: {artists[0].pricePerTicket} </h2>
            <Button/>
        </div>

        <Map location={location}/>

    </div>


    function GetDate() {
        let fullYear = artists[0].date.getFullYear();
        let month = artists[0].date.toLocaleString('en-US', { month: '2-digit' });
        let day = artists[0].date.toLocaleString('en-US', { day: '2-digit' });
        return { fullYear, month, day };
    }
}