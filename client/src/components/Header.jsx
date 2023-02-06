import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import LogoHeader from "../images/Component 3home-button.png"
import Navbar from "./Navbar.jsx";
import Searchbar from "./Searchbar.jsx";
import GlobalContext from "./GlobalContext.jsx";
import {useContext} from "react";

export default function () {

    const {auth} = useContext(GlobalContext)

    return <header>
        <div className="header-logo-title">
            <img src={LogoHeader} alt="u-logo"/>
            <h1>Unicorn Events</h1>
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
            <HeaderButton/>

            <ProfileIcon/>
        </div>
    </header>

    function HeaderButton() {
        if (auth.loggedIn) return <Link to="/signout">
            <button id="login-button">Log out</button>
        </Link>

        else return <>
            <Link to="/register">
                <button>Sign up</button>
            </Link>

            <Link to="/login">
                <button id="login-button">Log in</button>
            </Link>
        </>

    }

    function ProfileIcon() {
        if (!auth.loggedIn) return null

        return <Link to="profile">
            <img id="round-login-avatar" alt="avatar-logo" src={profile2}/>
        </Link>
    }
}

