import Eventcard from "./Eventcard.jsx";
import {useContext} from "react";
import GlobalContext from "./GlobalContext.jsx";

export default function () {
    const {concerts} = useContext(GlobalContext)

    return <div className="card-area-wrapper">
        <h2>Popular events</h2>
        <div className="card-area-events" >

        {
            concerts.slice(0,100).map(concert => <Eventcard details={concert}/>)        }
        </div>
    </div>
}

