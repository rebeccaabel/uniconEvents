import {artists} from "./artistArray.jsx";
import {createContext, useState} from "react";

const EventContext = createContext();
export default function ({title, text, image}) {
    const [event, setEvent] = useState("");
    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
        <h3>{title}</h3>
        <p>{text}</p>
        <EventContext.Provider value={event}>
            <button onClick={saveAnEvent}>Save Event</button>
        </EventContext.Provider>
        </div>
    </>
}


export function saveAnEvent () {
    let savedArray = []
   for(let i=0; i<artists.length; i++){
       artists[i].wishList = true;
       savedArray.push(artists[i])


   }
}



