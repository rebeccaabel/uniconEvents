import Button from "../paymentComponents/TicketButton.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {useParams} from "react-router-dom";

export default function ({details}) {
    const { concerts, artistInfo } = useContext(GlobalContext);
    const {name, image, datum, venue, id} = details;

    return <div>
        <div className="artist-card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>

        </div>
        <div className="about-artist-text">
            <h3>{name}</h3>

            <details className="artist-details">
                <summary>Read more</summary>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."</p>
            </details>


        </div>

    </div>

}
