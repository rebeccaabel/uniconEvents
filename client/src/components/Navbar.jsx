import {Link} from "react-router-dom";

export default function () {
    return <nav>
        <Link to="/">
            <button id={"nav-button"} >Home</button>
        </Link>

        <Link to="/artists">
            <button id={"nav-button"}>About Artists</button>
        </Link>

        <Link to="/filterpage">
            <button id={"nav-button"}>Advanced search</button>
        </Link>
    </nav>
}