import {Link} from "react-router-dom";


export default function () {

    return <div className='side-navbar'>
                <div>
                    <Link to={'calender'}><button>My calender</button></Link>
                </div>
            </div>
}