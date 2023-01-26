import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import LogoHeader from "../images/Component 3home-button.png"
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";


export default function () {
    return <header>
        <img id="logoheader" src={LogoHeader}/>
        <h1 id='header-title'>Unicorn Events</h1>
        <Searchbar/>
        <Navbar/>
        <Link to="profile"><img id="profileheader" src={profile2}/></Link>
    </header>
}