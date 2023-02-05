import {Link} from "react-router-dom";


export default function () {

    return <div className='side-navbar-wrapper'>
            <div className='side-navbar'>
                <div>
                    <Link to={'/profile/settings'}><button> Settings </button></Link>
                    <button> kalender </button>
                    <button> mMy events </button>
                    <button> My tickets</button>
                    <button> Change password </button>

                </div>
            </div>
        </div>
}