import {Link} from "react-router-dom";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";


export default function () {
    const{logout} = useContext(GlobalContext)
    const fetchLogout = () => {
        logout()
    }
    return <Link to="/signout">
        <button onClick={fetchLogout}  id="logout-button">Log out</button>
    </Link>
}