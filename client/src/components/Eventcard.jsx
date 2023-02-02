import GlobalContext from "./GlobalContext.jsx";
import {useContext, useEffect, useState} from "react";
import {SavedCard} from "./MySavedEvents.jsx";
export const wishlist = []
export default function ({name, image, location,date,id}) {
    const {concerts} = useContext(GlobalContext)

    function handleClick(){
        console.log(concerts.id)
        concerts.id = true;
        wishlist.push({image:image, name:name,date:date})
        console.log(wishlist)
        console.log({wishlist:date})
    }

    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
            <div className="event-card-details">
             <h3 >{name}</h3>
            <p>{location}</p>
            <p>{date}</p>
                <button className={"save-event"} onClick={() => {handleClick()} }>Save Event</button>
            </div>
        </div>
    </>
}

/*  <div>
                    {concerts.splice(0,1).map(concert => (
                        <div key={concert.id}>
                            <button className={"save-event"} onClick={() => handleClick(concert.id)}>
                            </button>
                        </div>
                    ))}
                </div>*/



