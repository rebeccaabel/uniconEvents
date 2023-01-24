import Eventcard from "./Eventcard";
import { sortByMostRecentAdded } from "./artistArrayFunctions";

export default function () {
    let artistsSortedByDateAdded = sortByMostRecentAdded()

    // Kolla up compare och sort funktion -M

    return <div className="card-area-wrapper">
        <h2>Newly Added Events</h2>
        <div className="card-area">
            {
                artistsSortedByDateAdded.map(artist => <Eventcard title={artist.title} text={artist.text} image={artist.image} />)
            }
        </div>
    </div>

}

