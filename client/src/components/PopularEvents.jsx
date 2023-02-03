import Eventcard from "./Eventcard.jsx";
import { artists } from "./artistArray.jsx";
import {useContext} from "react";
import GlobalContext from "./GlobalContext.jsx";
import {Link} from "react-router-dom";

export default function () {
    const {concerts} = useContext(GlobalContext)
    return <div className="card-area-wrapper">
        <h2>Popular events</h2>
        <div className="card-area-events" >
        {
             concerts.slice(0,40).map(artist =>  <Eventcard title={artist.name} location={artist.venue} date={artist.date.toLocaleString()} id={artist.id}  image={artist.image}/>)
        }
        </div>
    </div>

}

//title={artist.title} text={artist.text} image={artist.image}