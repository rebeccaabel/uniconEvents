import GlobalContext from "./GlobalContext.jsx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


export const wishlist = []
export const artistHubArray = []
export default function ({ name, image, location, datum, id }) {

    const { concerts } = useContext(GlobalContext);
    const [saved, setSaved] = useState(false)
    const [showEvent, setShowEvent] = useState(false)


    return <>
        <Link to="/ArtistHub">
            <div className="card" alt='artist picture' onClick={() => { artistHubInfo() }} style={{ backgroundImage: `url(${image})` }}>
                <div className="event-card-details">
                    <h3>{name}</h3>
                    <p>{location}</p>
                    <p>{datum}</p>
                    <button className={"save-event"} onClick={() => {
                        handleClick()
                    }} style={{ backgroundColor: saved ? "pink" : "white" }}><i className="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </Link>
    </>

    // function handleClick() {
    //     setSaved(!saved)
    //     console.log({ concerts: id = true })
    //     wishlist.push({ name: name, datum: datum, venue: location, image: image })
    //     console.log(wishlist)
    // }

    function artistHubInfo() {
        setShowEvent(!showEvent)
        artistHubArray.push({ name: name, datum: datum, venue: location, image: image })

        console.log({ concerts: id = true })
        console.log({ concerts: id }, { concerts: name })

        console.log(artistHubArray);
    }
        
}

/*

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
*/