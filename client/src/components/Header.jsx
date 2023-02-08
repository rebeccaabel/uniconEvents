import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import Navbar from "./Navbar.jsx";
import GlobalContext from "./GlobalContext.jsx";
import {useContext} from "react";
import LogOutButton from "./profileComponents/LogOutButton.jsx";
import Logo from "./Logo.jsx";

export default function () {

    const {auth} = useContext(GlobalContext)

    return <header>
        <Logo/>
        <div className="searchbar-and-navbar-wrapper">
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
        if (auth.loggedIn) return <LogOutButton/>


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

