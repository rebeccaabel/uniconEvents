import LogoHeader from "../images/Component 3home-button.png";
import { Link } from "react-router-dom";

export default function () {
    return <div className="header-logo-title">
        <img src={LogoHeader} alt="u-logo" />
        <h1 >Unicorn Events</h1>
    </div>
}