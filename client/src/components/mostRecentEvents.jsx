import Eventcard from "./Eventcard";
import { artists } from "./artistArray.jsx";




export default function () {
    let sortingNumber = 0
    let artistsSortedByDateAdded = []
    let numberOfCardsShown = 50;
    for (let i = 0; i < artists.length; i++) {
        if (artistsSortedByDateAdded.length > numberOfCardsShown) {
            continue
        }
        if (artists[i].dateAdded.getTime() >= sortingNumber) {
            artistsSortedByDateAdded.unshift(artists[i])
            sortingNumber = artists[i].dateAdded.getTime()
        } else {
            artistsSortedByDateAdded.push(artists[i])
            sortingNumber = artists[i].dateAdded.getTime()
        }
    }

    return <div className="card-area-wrapper">
        <h2>Newly Added Events</h2>
        <div className="card-area">
            {
                artistsSortedByDateAdded.map(artist => <Eventcard title={artist.title} text={artist.text} image={artist.image} />)
            }
        </div>
    </div>

}

