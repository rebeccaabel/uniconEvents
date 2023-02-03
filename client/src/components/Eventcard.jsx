import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import GlobalContext from "./GlobalContext.jsx";


export default function ({title, image, location, date, id}) {
    const {concerts} = useContext(GlobalContext)

    concerts.map(artist => title={artist.name} location={artist.venue} date={artist.date.toLocaleString()} id={artist.id}  image={artist.image}
    return <>
        <Link to="/ArtistHub">  <div className="card" onClick={()=> {getInfo(id)}} style={{backgroundImage:`url(${image})`}}>
            <div className="event-card-details">

        <h3 >{title}</h3>
            <p>{location}</p>
            <p>{date}</p>
                <p> {id} </p>

            </div>
        </div> </Link>
    </>

    function getInfo(id) {
        return {concerts:id}
    }
}