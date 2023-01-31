import Eventcard from "./Eventcard.jsx";
import { artists } from "./artistArray.jsx";

export default function () {
    return <div className="card-area-wrapper">
        <h2>Popular events</h2>
        <div className="card-area">
        {
            artists.map(artist => <Eventcard title={artist.title} text={artist.text} image={artist.image} id={artist.id} />)
        }
        </div>
    </div>

}