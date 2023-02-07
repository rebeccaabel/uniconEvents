import {useContext, useEffect, useState} from "react";
import GlobalContext from "./GlobalContext.jsx";


export default function ({name, image, location, datum, id}) {


    const {wishlists} = useContext(GlobalContext)
    const [card, setCard] = useState(...wishlists)
    return <>

        {(card && <div className="card" style={{backgroundImage: `url(${image})`}}>

            <h3>{name}</h3>
            <p>{location}</p>
            <p>{datum}</p>
            <p>{id}</p>
            <SaveButton/>
        </div> )}
    </>


 function SaveButton(){

        return <button className={"save-event"} onClick={()=> {handleDelete()}}
                       style={{color:"red"}}><i className="fa-solid fa-heart"></i></button>

    }

    function handleDelete() {

   wishlists.splice({wishlists:id},1)
       setCard(false)
     }; 
    }






















