import {artists} from "./artistArray.jsx";
import React from "react";
import SavedEventCard from "./SavedEventCard.jsx";

let savedEventsArray = []

export function saveAnEvent(id) {

    console.log({id})
    for (let i = 0; i < artists.length; i++) {
        if (id === artists[i].id) {
            let savedArtist = artists[i].wishList = true
            console.log(artists[i].wishList)

            if (savedArtist) {
                savedEventsArray.push(artists[i])
               ShowSavedEvent()
            }
        }
    }
}
export function ShowSavedEvent() {
    return <div>
        {
            savedEventsArray.map(savedEvent => <SavedEventCard image={savedEvent.image} title={savedEvent.title}
                                                            date={savedEvent.date}/>)
        }
    </div>

}