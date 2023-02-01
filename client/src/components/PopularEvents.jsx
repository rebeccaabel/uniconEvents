import Eventcard from "./Eventcard.jsx";
import { artists } from "./artistArray.jsx";
import {useContext} from "react";
import GlobalContext from "./GlobalContext.jsx";

export default function () {
    const {concerts} = useContext(GlobalContext)
    return <div className="card-area-wrapper">
        <h2>Popular events</h2>
        <div className="card-area-events" >
        {
            concerts.slice(0,10).map(artist => <Eventcard title={artist.title} location={artist.location} date={artist.date.toLocaleString()}  image={artist.image}/>)
        }
        </div>
    </div>

}

//title={artist.title} text={artist.text} image={artist.image}