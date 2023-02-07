import "../styles/ArtistHub.css"
import { artists } from "./artistArray.jsx";
import Button from "../components/TicketButton.jsx";
import GlobalContext from "./GlobalContext.jsx";
import {useContext} from "react";
import {useParams} from "react-router-dom";



export default function () {
    const {concerts} = useContext(GlobalContext);
    const id = useParams().id
    const concert = concerts.find(c => c.id === parseInt(id))



    if (!concert) return null
    const {name, image, datum, venue} = concert


    return <div className="artist-info-wrapper">
        <div>
            <h1 id="title">{name}</h1>
        </div>

        <div className="artist-image">
            <img src={image} alt={"picture of artist"}/>
        </div>


        <div className="description">

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolor explicabo excepturi
                    numquam earum et cumque, vel omnis facilis similique quos laudantium incidunt consectetur hic maxime
                    porro aperiam corrupti non?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas voluptate assumenda
                    esse. Asperiores rem quam maiores error vitae sequi ipsa, ex reiciendis itaque expedita aut, minima
                    unde commodi adipisci?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium, temporibus quasi facere
                    blanditiis possimus nostrum, a voluptates provident earum modi similique expedita vitae tenetur
                    praesentium perspiciatis tempora officiis nulla!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ratione magnam praesentium
                    dolorum id, dignissimos aperiam voluptates vitae cumque amet at corporis, aliquam voluptas fugit
                    laboriosam ducimus provident nemo impedit.
                </p>

            <p></p>
        </div>

        <div className="location">
            <h2>Date: {datum}</h2>
            <h2>Location: {venue}</h2>
        </div>

        <div className="ticket">
            <h2>Tickets Remaining: {artists[0].availableSeats} / {artists[0].totalSeats}</h2>
            <h2>Price: 500 </h2>
            <Button/>
        </div>

        <div className="google-maps">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8149.252604773845!2d18.07185034916066!3d59.29432706325974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7826c8abcc0f%3A0x1d7a9835ba7d7f96!2sAvicii%20Arena!5e0!3m2!1ssv!2sse!4v1675177064352!5m2!1ssv!2sse"
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>



}

