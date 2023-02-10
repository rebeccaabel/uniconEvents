import {Link} from "react-router-dom";
import "../../styles/TicketButton.css";

export default function(){
    return <Link to={'/section'}><button>Buy Ticket</button></Link>
}