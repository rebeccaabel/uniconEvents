import Card from "./EventCard.jsx";
import { sortIfToday } from "./artistArrayFunctions.jsx";

export default function () {
    const today = new Date()
    let sortedArray = sortIfToday()
   
      return <div className="card-area-wrapper">
        <h2>Todays Events</h2>
        <div className="card-area">
            {
                sortedArray.map(artist => <Card title={artist.title} text={artist.text} image={artist.image} />)
            }
        </div>
    </div> 
    }