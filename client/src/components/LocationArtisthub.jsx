import GlobalContext from "./GlobalContext.jsx";
import {useParams} from "react-router-dom";
import {useContext} from "react";

export default function () {
    const {concerts} = useContext(GlobalContext);
    const id = useParams().id
    const concert = concerts.find(c => c.id === parseInt(id))

    if (!concert) return null
    const {datum, venue} = concert

    return       <div className="location">
        <h2>Date: {datum}</h2>
        <h2>Location: {venue}</h2>
    </div>

}