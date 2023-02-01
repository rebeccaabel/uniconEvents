import {SaveAnEvent} from "./MySavedEvents.jsx"
export default function ({title, image, location, date, id}) {

    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
            <div className="event-card-details">

        <h3 >{title}</h3>
            <p>{location}</p>
            <p>{date}</p>
                <button className={"save-event"} id={id} onClick={() => {SaveAnEvent(id)} }>Save Event</button>
            </div>
        </div>
    </>


}



