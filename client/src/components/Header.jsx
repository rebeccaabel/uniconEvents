import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import LogoHeader from "../images/LogoPurpleBlack.png"
import Navbar from "./Navbar.jsx";


export default function () {
    return <header>
        <img id="logoheader" src={LogoHeader}/>
            <Navbar/>
        <Link to="profile"><img id="profileheader" src={profile2}/></Link>
    </header>
}