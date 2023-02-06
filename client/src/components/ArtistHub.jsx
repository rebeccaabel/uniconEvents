import "../styles/ArtistHub.css";
import { artists } from "./artistArray.jsx";
import Button from "../components/TicketButton.jsx";
import GlobalContext from "./GlobalContext.jsx";
import {useContext} from "react";
import {useParams} from "react-router-dom";


import Map from "../components/GoogleMaps";


export default function () {
    const {concerts} = useContext(GlobalContext);
    const id = useParams().id
    const concert = concerts.find(c => c.id === parseInt(id))

/*
    let {fullYear, month, day} = GetDate();

    const [artist, setArtist] = useState(artistInfo);
    useEffect(()=> {
        setArtist(artistInfo)
    }, [])
    */

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
            <p>Here is where some information about the event are present.
                Here we can read in more detail what the event is all about...
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

        <Map location={location}/>

    </div>


    function GetDate() {
        let fullYear = artists[0].date.getFullYear();
        let month = artists[0].date.toLocaleString('en-US', {month: '2-digit'});
        let day = artists[0].date.toLocaleString('en-US', {day: '2-digit'});
        return {fullYear, month, day};
    }

}

/*
        <div>
            {
            artist.map(newArtist => <Eventcard name={newArtist.name} location={newArtist.venue} datum={newArtist.datum.toLocaleString()} id={newArtist.id}  image={newArtist.image}/>)
            }
            </div>


 */