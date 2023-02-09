import {Link} from "react-router-dom";
import profile2 from "../../images/profile2.png";
import LogOutButton from "./LogOutButton.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {

    const {auth} = useContext(GlobalContext)

    return  <div className="profile-signup-login">
            <HeaderButton/>
            <ProfileIcon/>
        </div>

    function HeaderButton() {
        if (auth.loggedIn) return <LogOutButton/>


        else return <>
            <Link to="/register">
                <button id="register-button-header">Sign up</button>
            </Link>

            <Link to="/login">
                <button id="login-button">Log in</button>
            </Link>
        </>

    }

    function ProfileIcon() {
        if (!auth.loggedIn) return null

        return <Link to="profile/calender">
            <img id="round-login-avatar" alt="avatar-logo" src={profile2}/>
        </Link>
    }
}


