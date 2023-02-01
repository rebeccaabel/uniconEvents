import {artists} from "./artistArray.jsx";
export const savedEventsArray = []
export let idArray = []
export function SaveAnEvent(id) {
    for (let i = 0; i < artists.length; i++) {
        if (id === artists[i].id) {
            idArray.push(id)
            savedEventsArray.push(artists[i])
            console.log(idArray)
            artists[i].wishList = true
            console.log(artists[i].wishList)
        }
    }
}

export function SavedCard ({title, text, image, id}) {
    return <>
        <div className="card" style={{backgroundImage: `url(${image})`}}>
            <h3>{title}</h3>
            <p>{text}</p>
            <p>{id}</p>
        </div>
    </>

}