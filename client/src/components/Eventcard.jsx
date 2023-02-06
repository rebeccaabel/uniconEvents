import GlobalContext from "./GlobalContext.jsx";
import {useContext,useState} from "react";


export default function ({name, image, location,datum,id}) {
    const {concerts} = useContext(GlobalContext)
    const {wishlists} = useContext(GlobalContext)
    console.log(wishlists)
    const [saved, setSaved] = useState(false)
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
    function handleClick(){
        setSaved(!saved)
        wishlists.push({name:name, datum:new Date(datum).getMonth(),year:new Date(datum).getFullYear(), venue:location, image:image})
        console.log(wishlists)
    }
}



