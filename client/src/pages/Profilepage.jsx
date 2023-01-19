import UserInfo from "../components/UserInfo.jsx";
import Header from "../components/Header.jsx";
import {useEffect,useState} from "react";

export default function () {
    const [displayinfo, setinfo] = useState();
    useEffect(() => {
        setinfo('');
    })
    return <>
        <Header/>
        <h1>Personuppgifter</h1>
        <UserInfo/>
        <div>

                <button>

                    Settings
                </button>

            <button>My tickets</button>
            <button>Calender</button>
        </div>
    </>


}