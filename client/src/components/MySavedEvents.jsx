import {artists} from "./artistArray.jsx";
export const wishlist = []
export const idArray = []
export function SaveAnEvent(id) {
    const artist = artists.find(artist=>artist.id===id)
    wishlist.push(artist)
}

export function SavedCard ({ event}) {
    return <>
        <div className="card" style={{backgroundImage: `url(${event.image})`}}>
            <h3>{event.title}</h3>
            <h3>{event.time}</h3>
            <p>{event.id}</p>
        </div>
    </>

}