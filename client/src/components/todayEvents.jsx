import { artists } from "./artistArray.jsx";
import Eventcard from "./EventCard.jsx";


export default function () {


    const today = new Date()
    let artistsSortedByToday = []
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].date.getFullYear() === today.getFullYear() &
            artists[i].date.getMonth() === today.getMonth() &
            artists[i].date.getDate() === today.getDate()

            /*  
            IMPLEMENT THIS WHEN WE GET THE REAL JSON-FILE FOR THE EVENTS
            & artists[i].date.getHours() < today.getHours() 
            */
            ){
                artistsSortedByToday.push(artists[i])

        }   
    }


    
      return <div className="card-area-wrapper">
        <h2>Todays Events</h2>
        <div className="card-area">
            {
                artistsSortedByToday.map(artist => <Eventcard  title={artist.title} location={artist.location} date={artist.date.toLocaleString()}    image={artist.image} />)
            }
        </div>
    </div> 
    }