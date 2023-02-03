import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import LogoHeader from "../images/Component 3home-button.png"
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";


export default function () {
    return <header>
        <div className="header-logo-title">
            <img src={LogoHeader} alt="u-logo"/>
            <h1 >Unicorn Events</h1>
        </div>


        <div className="searchbar-and-navbar-wrapper">
            <div className="search-header">
            <Searchbar/>
            </div>

            <div className="nav-header">
            <Navbar/>
            </div>
        </div>

    <div className="profile-signup-login">


        <Link to="/register">
            <button>Sign up</button>
        </Link>

        <Link to="/login">
            <button id="login-button">Log in</button>
        </Link>
        <Link to="profile"><img id="round-login-avatar"  alt="avatar-logo" src={profile2}/></Link>

    </div>
    </header>
}

