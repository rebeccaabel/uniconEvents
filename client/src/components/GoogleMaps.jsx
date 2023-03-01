import "../styles/GoogleMaps.css";
import GlobalContext from "./GlobalContext.jsx";
import {useParams} from "react-router-dom";
import {useContext} from "react";

export default function () {

    const {concerts} = useContext(GlobalContext);
    const id = useParams().id
    const concert = concerts.find(c => c.id === parseInt(id))

    if (!concert) return null
    const {venue} = concert

    return <iframe id="iFrameMaps"src={`https://www.google.com/maps/embed/v1/place?q=${venue}`}></iframe>

}