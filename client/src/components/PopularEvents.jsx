import Eventcard from "./Eventcard.jsx";
import { artists } from "./artistArray.jsx";

export default function () {
    return <div className="card-area-wrapper">
        <h2>Popular events</h2>
        <div className="card-area-events" >
        {
            artists.map(artist => <Eventcard title={artist.title} location={artist.location} date={artist.date.toLocaleString()}  image={artist.image}/>)
        }
        </div>
    </div>

}

//title={artist.title} text={artist.text} image={artist.image}