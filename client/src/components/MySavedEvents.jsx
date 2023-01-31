import {artists} from "./artistArray.jsx";
import SavedEventCard from "./SavedEventCard.jsx";
import Eventcard from "./Eventcard.jsx";
import {monthByName} from "./MonthArray.jsx";


const savedEventsArray = []
export function SaveAnEvent(id) {
    console.log(id)
    for (let i = 0; i < artists.length; i++) {
        if (id === artists[i].id) {
            artists[i].wishList = true
            console.log(artists[i].wishList)
            savedEventsArray.push(artists[i])
           /* if(artists[i].wishList = false) {
                console.log(savedEventsArray)
                artists.map(savedEvent => <Eventcard title={savedEvent.title} date={savedEvent.date.toLocaleString()} image={savedEvent.image} />)
                console.log(artists.map(savedEvent => <Eventcard title={savedEvent.title} date={savedEvent.date.toLocaleString()} image={savedEvent.image} />))
            }*/
        }
    }
}

//Funkar men sätter automatiskt till true
export function Test(){
        for (let i = 0; i < artists.length; i++) {
            if (artists[i].wishList = true) {
                if(artists[i].date.getMonth() > monthByName[5].month.getMonth())
                return artists.map(savedEvent => <Eventcard title={savedEvent.title} date={savedEvent.date.toLocaleString()} image={savedEvent.image} />)
            }
        }
}

//Funkar ej
export function ShowSavedEvent() {
    /*return savedEventsArray.map(savedEvent => <SavedEventCard title={savedEvent.title} date={savedEvent.date} image={savedEvent.image} />)*/
    return artists.map(savedEvent => <Eventcard title={savedEvent.title} date={savedEvent.date.toLocaleString()} image={savedEvent.image} />)
}
