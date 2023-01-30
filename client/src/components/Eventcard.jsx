import {artists} from "./artistArray.jsx";

export default function ({title, text, image}) {
    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
        <h3>{title}</h3>
        <p>{text}</p>

        <button onClick={saveAnEvent}>Save Event</button>
        </div>
    </>
}

export let savedArray = []
export function saveAnEvent () {
   for(let i=0; i<artists.length; i++){
       artists[i].wishList = true;
       savedArray.push(artists[i])


   }
}



