import {useEffect, useState} from "react";

export default function () {
    const [displayinfo, setinfo] = useState();
    useEffect(() => {
        setinfo('');
    },[])

    return <div className='side-navbar'>
        <p>{displayinfo}</p>
        <button onClick={() => setinfo('Hej')}> Settings </button>
        <button>My tickets</button>
        <button>Calender</button>

    </div>

}