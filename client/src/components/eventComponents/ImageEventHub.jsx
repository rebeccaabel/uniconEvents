import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {useParams} from "react-router-dom";

export default function () {
    const {concerts} = useContext(GlobalContext);
    const id = useParams().id
    const concert = concerts.find(c => c.id === parseInt(id))

    if (!concert) return null
    const {image} = concert


    return    <div className="artist-image">
        <img src={image} alt={"picture of artist"}/>
    </div>
}