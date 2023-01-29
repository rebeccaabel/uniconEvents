import {artists} from "./artistArray.jsx";
import AboutArtists from "./AboutArtists.jsx";
import React from "react";

export default function () {
    let savedArray = []
    const saveAEvent = () => {
        for (let i = 0; i<artists.length; i++){
           let savedIsTrue = artists[i].wishList = true;
            console.log(artists[i].wishList)
            if(savedIsTrue) {
                savedArray.push(artists[i])
                console.log(savedArray)
                showSavedEvent()
            }
        }
    }
    const showSavedEvent = () => {
        return <AboutArtists/>
    }

    return <div>
        <button onClick={saveAEvent}>Save Event</button>
    </div>
}