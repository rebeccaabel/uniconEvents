import Eventcard from "../Eventcard.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const {concerts} = useContext(GlobalContext)

    return <div className="card-area-wrapper">
        <h2>Popular events</h2>
        <div className="card-area-events" >
        {
            concerts.slice(0,10).map(artist => <Eventcard name={artist.name} location={artist.venue} datum={artist.datum} image={artist.image} id={artist.id}/>)
        }
        </div>
    </div>
}

