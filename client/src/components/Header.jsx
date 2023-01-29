import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import LogoHeader from "../images/Component 3home-button.png"
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";


export default function () {
    return <header>

        <img id="header-logo-u" src={LogoHeader}/>
        <h1 id='unicorn-events-title'>Unicorn Events</h1>
        <div className="searchbar-and-navbar">
            <Searchbar/>
            <Navbar/>
        </div>


        <Link to="profile"><img id="round-login-avatar" src={profile2}/></Link>
    </header>
}