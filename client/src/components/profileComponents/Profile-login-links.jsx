import {Link} from "react-router-dom";
import profile2 from "../../images/profile2.png";

export default function () {
    return  <div className="profile-signup-login">
        <Link to="/signUpPage">
            <button>Sign up</button>
        </Link>
        <Link to="/login">
            <button id="login-button">Log in</button>
        </Link>
        <Link to="profile"><img id="round-login-avatar" alt="avatar-logo" src={profile2} /></Link>
    </div>
}