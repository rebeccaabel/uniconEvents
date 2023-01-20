import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import logoHeader from "../images/LogoPurpleBlack.png"


export default function () {
    return <header>

        <div className="horse-logo">
        <img id="logoheader" src={logoHeader}/>
        </div>
        <Link to="profile"><img id ="profileheader" src={profile2}/></Link>

    </header>
}