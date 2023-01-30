import {artists} from "./artistArray.jsx";
import {createContext, useState} from "react";


export default function ({title, text, image}) {
    const [event, setEvent] = useState("");
    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
        <h3>{title}</h3>
        <p>{text}</p>

            <button onClick={saveAnEvent}>Save Event</button>

        </div>
    </>
}


function saveAnEvent () {

    let savedArray = []
    console.log(savedArray)
   for(let i=0; i<artists.length; i++){
       artists[i].wishList = true;
       savedArray.push(artists[i])
   }
}



