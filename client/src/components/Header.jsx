import {Link} from "react-router-dom";
import profile2 from "../images/profile2.png"
import logoHeader from "../images/LogoPurpleBlack.png"
import Navbar from "./Navbar.jsx";


export default function () {
    return <div className='header-wrapper'>
            <header>
                    <img id="logoheader" src={logoHeader}/>
                <div className='top-navbar'>
                    <Navbar/>
                </div>


                <Link to="profile"><img id ="profileheader" src={profile2}/></Link>
            </header>

        </div>


}