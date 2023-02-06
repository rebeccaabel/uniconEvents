import {useState} from "react";

export default function ({name, image, location,datum}) {
    const [card, setCard] = useState(true)
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
        setCard((removed) => !removed)
    }
}