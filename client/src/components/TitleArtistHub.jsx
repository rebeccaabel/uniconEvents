import {useContext} from "react";
import GlobalContext from "./GlobalContext.jsx";
import {useParams} from "react-router-dom";

export default function () {
    const {concerts} = useContext(GlobalContext);
    const id = useParams().id
    const concert = concerts.find(c => c.id === parseInt(id))



    if (!concert) return null
    const {name} = concert


    return   <div>
        <h1 id="title">{name}</h1>
    </div>
}