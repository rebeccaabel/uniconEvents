import {Link} from "react-router-dom";


export default function () {

    return <div className='side-navbar-wrapper'>
            <div className='side-navbar'>
                <div>
                    <Link to={'/profile/settings'}><button> Settings </button></Link>
                    <Link to={'calender'}><button>My calender</button></Link>
                </div>
            </div>
        </div>
}