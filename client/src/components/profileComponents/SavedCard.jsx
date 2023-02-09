import {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {Link} from "react-router-dom";


export default function ({details}) {
    const {name, image, datum, location, id} = details
    const {wishlists} = useContext(GlobalContext)
    const [card, setCard] = useState(wishlists)
    return <>
    {(card && <div id={"saved-artist"}>
        <Link to={`/ArtistHub/${id}`} style={{ textDecoration: 'none' }} ><div className="card" style={{backgroundImage: `url(${image})`}}>
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{datum}</p>
        </div>  </Link>
            <SaveButton/>
        </div>)}
    </>
    function SaveButton(){
        return <button class={"save-event"} onClick={()=> {handleDelete()}}
                       style={{color:"pink"}}><i className="fa-solid fa-heart"></i></button>
    }
    function handleDelete() {
        wishlists.splice({wishlists:id},1)
       setCard(false)
     }
    }






















