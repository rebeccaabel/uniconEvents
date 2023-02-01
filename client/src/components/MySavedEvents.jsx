import {artists} from "./artistArray.jsx";
import {useContext} from "react";
import GlobalContext from "./GlobalContext.jsx";
export const wishlist = []
export const idArray = []
export function SaveAnEvent(id) {
    const {concerts} = useContext(GlobalContext)
    const artist = concerts.find(artist=>artist.id===id)
    wishlist.push(artist)
}
export function SavedCard ({event}) {
    return <>
        <div className="card" style={{backgroundImage: `url(${event.image})`}}>
            <h3>{event.title}</h3>
            <h3>{event.time}</h3>
            <p>{event.id}</p>
        </div>
    </>

}