import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export default function () {
    const [displayinfo, setinfo] = useState();
    useEffect(() => {
        setinfo('');

    },[])

    return <>
        <div className='side-navbar-wrapper'>
            <div className='side-navbar'>
                <div>
                    <Link to={'/profile/settings'}><button> Settings </button></Link>
                </div>
            </div>

            <div className='side-navbar-info'>
                <div>{displayinfo}</div>
            </div>

        </div>

    </>


}