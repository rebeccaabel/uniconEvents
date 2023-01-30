import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import LogoHeader from "../images/Component 3home-button.png"
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";


export default function () {
    return <header>

            <img id="header-logo-u" src={LogoHeader} alt="u-logo"/>
            <h1 id='unicorn-events-title'>Unicorn Events</h1>


        <div className="searchbar-and-navbar-wrapper">
            <div className="search-header">
            <Searchbar/>
            </div>

            <div className="nav-header">
            <Navbar/>
            </div>
        </div>

    <div className="profile-signup-login">


        <Link to="/signUpPage">
            <button>Sign up</button>
        </Link>

        <Link to="/login">
            <button id="login-button">Log in</button>
        </Link>
        <Link to="profile"><img id="round-login-avatar"  alt="avatar-logo" src={profile2}/></Link>

    </div>
    </header>
}

