import GlobalContext from "./GlobalContext.jsx";
import {useContext,useState} from "react";
import {SavedCard} from "./MySavedEvents.jsx";
export const wishlist = []
export default function ({name, image, location,datum,id}) {
    const {concerts} = useContext(GlobalContext)
    const [saved, setSaved] = useState(false)
    function handleClick(){
        setSaved(!saved)
        console.log({concerts:id=true})
        wishlist.push({name:name, datum:datum, venue:location, image:image})
        console.log(wishlist)
    }
    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
            <div className="event-card-details">
             <h3 >{name}</h3>
            <p>{location}</p>
            <p>{datum}</p>
                <button className={"save-event"} onClick={() => {handleClick()} } style={{backgroundColor:saved ? "pink" : "white"}}><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
    </>
}



