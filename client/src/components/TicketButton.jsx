import {Link} from "react-router-dom";
import "../TicketButton.css";

export default function(){
    return<>
        <Link to={'/Paymentpage'}><button>Buy Ticket</button></Link>
    </>

}