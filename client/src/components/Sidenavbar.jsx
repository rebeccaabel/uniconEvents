import {Link} from "react-router-dom";
import {handleMonth} from "./MyCalender.jsx";

export default function () {

    return <div className='side-navbar-wrapper'>
            <div className='side-navbar'>
                <div>
                    <Link to={'/profile/settings'}><button> Settings </button></Link>
                    <Link to={'/profile/MyCalender'}><button onClick={handleMonth}>My calender</button></Link>
                </div>
            </div>
        </div>
}