import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {useParams} from "react-router-dom";

export default function () {
    const {concerts} = useContext(GlobalContext);
    const id = useParams().id
    const concert = concerts.find(c => c.id === parseInt(id))

    if (!concert) return null
    const {datum, venue} = concert

    return <> <h2>Date: {datum}</h2>
        <h2>Location: {venue}</h2>
    </>
}