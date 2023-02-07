import GlobalContext from "./GlobalContext.jsx";
import {useContext,useState} from "react";
import * as events from "events";


export default function ({name, image, location,datum,id}) {
    const {wishlists} = useContext(GlobalContext)
    const [saved, setSaved] = useState(false)

    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
            <div className="event-card-details">
             <h3 >{name}</h3>
            <p>{location}</p>
            <p>{datum}</p>
            <SaveButton/>
            </div>
        </Link>
    </>

    function SaveButton(){

        return <button className={"save-event"} onClick={() => {handleClick()} }
                       style={{color:saved ? "red" : "black"}}><i className="fa-solid fa-heart"></i></button>

    }
    function handleClick(){
        setSaved(!saved)
        wishlists.push({name:name, datum:new Date(datum).toDateString(), month:new Date(datum).getMonth(),year:new Date(datum).getFullYear(), venue:location, image:image, id:id})
    }
}




