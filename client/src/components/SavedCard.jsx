import {useContext, useState} from "react";
import GlobalContext from "./GlobalContext.jsx";

export default function ({name, image, location,datum}) {
    const {wishlists} = useContext(GlobalContext)
    const [card, setCard] = useState(wishlists)
    return <>
        {card &&( <div className="card" style={{backgroundImage: `url(${image})`}}>

            <div className="event-card-details">
                <h3>{name}</h3>
                <p>{location}</p>
                <p>{datum}</p>
                    <button className={"save-event"} onClick={() => {RemoveCard()} }
                            style={{color: "red"}}><i className="fa-solid fa-heart"></i></button>
            </div>)
        </div> )}
    </>
    function RemoveCard(){
        for (let i = 0; i<wishlists.length; i++){
            wishlists.splice(i)
            setCard(false)
        }

    }
}