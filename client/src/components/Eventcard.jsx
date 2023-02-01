import {artists} from "./artistArray.jsx";
import {SaveAnEvent} from "./MySavedEvents"
export default function ({title, text, image, id}) {
    return <>
        <div className="card" style={{backgroundImage: `url(${image})`}}>
            <h3>{title}</h3>
            <p>{text}</p>
            <p>{id}</p>
            <button id={id} onClick={() => {SaveAnEvent(id)} }>Save Event</button>
        </div>
    </>


}



