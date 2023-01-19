import Card from "./Card.jsx";
import { artists } from "./artistArray.jsx";
let artistsSortedByDateAdded = []
let numberOfCardsShown = 9;
export default function () {
    let sortingNumber = 0
    for (let i = 0; i < artists.length; i++) {
        if (artistsSortedByDateAdded.length > numberOfCardsShown) {
            continue
        }
        if (artists[i].dateAdded > sortingNumber) {
            artistsSortedByDateAdded.unshift(artists[i])
            sortingNumber = artists[i].dateAdded
        } else {
            artistsSortedByDateAdded.push(artists[i])
            sortingNumber = artists[i].dateAdded
        }
    }

    return <div className="card-area-wrapper">
        <h2>Newly Added Events</h2>
        <div className="card-area">
            {
                artistsSortedByDateAdded.map(artist => <Card title={artist.title} text={artist.text} image={artist.image} />)
            }
        </div>
    </div>

}

