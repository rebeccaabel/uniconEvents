import GlobalContext from "./GlobalContext.jsx";
import {useContext,useState} from "react";
import {Link} from "react-router-dom";
export default function ({details}) {
    const {wishlists} = useContext(GlobalContext)
    const {artistInfo } = useContext(GlobalContext);
    const [saved, setSaved] = useState(false)
    const [showEvent, setShowEvent] = useState(false)
    return<>
        <div className={"whatever"}>
        <Link to={`/ArtistHub/${id}`}>
    <div className="card" onClick={() => { artistHubInfo() }} style={{ backgroundImage: `url(${image})` }}>
        <div className="event-card-details">
             <h3 >{name}</h3>
            <p>{location}</p>
            <p>{datum}</p>
            </div>
        </div>
    </Link>
    <SaveButton/>
        </div>
    </>

    function SaveButton(){
        return <button className={"save-event"} onClick={() => {handleClick()} }
                       style={{color:saved ? "red" : "black"}}><i className="fa-solid fa-heart"></i></button>

    }
    function handleClick(){
        setSaved(!saved)
        wishlists.push({name:name, datum:new Date(datum).toDateString(), month:new Date(datum).getMonth(),year:new Date(datum).getFullYear(), venue:location, image:image, id:id})
    }
    function artistHubInfo() {
        setShowEvent(!showEvent)
        artistInfo.push({ name: name, datum: datum, venue: location, image: image })
    }
}









