import Artistcard from "./Artistcard.jsx";
import Eventcard from "../Eventcard.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const {concerts} = useContext(GlobalContext)

    return <div className="card-area-wrapper">
            <h2>About Artists</h2>
            <div className="card-area-artists">
                {
                    concerts.slice(500,540).map(concert => <Artistcard details={concert}/>)
                }
            </div>
        </div>

}