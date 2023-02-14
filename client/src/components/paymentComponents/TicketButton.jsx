import {Link, useParams} from "react-router-dom";
import "../../styles/TicketButton.css";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function(){
    const id = useParams().id
    return <Link to={`/section/${id}`}><button>Buy Ticket</button></Link>
}
