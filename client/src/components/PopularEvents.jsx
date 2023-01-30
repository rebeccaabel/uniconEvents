import Card from "./Card.jsx";
import { artists } from "../utils/artists-data.js";

export default function () {
    return <div className="card-area-wrapper">
        <h2>Popular events</h2>
        <div className="card-area">
        {
            artists.map(artist => <Card details={artist}/>)
        }
        </div>
    </div>

}