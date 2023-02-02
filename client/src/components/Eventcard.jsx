import GlobalContext from "./GlobalContext.jsx";
import {useContext, useEffect, useState} from "react";
import {SavedCard} from "./MySavedEvents.jsx";
export const wishlist = []
export default function ({name, image, location,datum,id}) {
    const {concerts} = useContext(GlobalContext)

    function handleClick(id){
        console.log(concerts.id)
        /*const artist = concerts.find(artist=> artist.id === id)*/
        concerts.id = true;
        wishlist.push({concerts:name, concert:datum})
        console.log({concerts:id})
        console.log(wishlist)
    }

    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
            <div className="event-card-details">
             <h3 >{name}</h3>
            <p>{location}</p>
            <p>{datum}</p>
                <button className={"save-event"} key={id} onClick={() => {handleClick({concerts:id})} }>Save Event</button>
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



