import Eventcard from "./Eventcard";
import GlobalContext from "./GlobalContext";
import { useContext } from "react";

export default function () {
    const { concerts } = useContext(GlobalContext)
    const cloneConcerts = [...concerts]
    cloneConcerts.sort((a, b) => {
        return b.id - a.id
    })

    return <div className="card-area-wrapper">
        <h2>Newly Added Events</h2>
        <div className="card-area-events">
            {cloneConcerts.slice(0, 10).map(concert => <Eventcard details={concert} />)}
        </div>
    </div>

}

