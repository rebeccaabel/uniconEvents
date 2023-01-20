import {useEffect, useState} from "react";
import Usersettings from "./Usersettings.jsx";

export default function () {
    const [displayinfo, setinfo] = useState();
    useEffect(() => {
        setinfo('');

        //let settingbtn = document.querySelector(".contact-information-container");
    },[])

    return <>
        <div className='side-navbar-wrapper'>
            <div className='side-navbar'>
                <div>
                    <button className="setting-btn" onClick={() => setinfo(Usersettings)}> Settings </button>
                    <button>My tickets</button>
                    <button>Calender</button>
                </div>
            </div>

            <div className='side-navbar-info'>
                <p>{displayinfo}</p>
            </div>

        </div>

    </>


}