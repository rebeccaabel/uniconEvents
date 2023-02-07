import {Link} from "react-router-dom";

export default function () {
    return <nav>
        <Link to="/">
            <button id='home-button'>Home</button>
        </Link>

        <Link to="/artists">
            <button>About Artists</button>
        </Link>

        <Link to="/filterpage">
            <button>Advanced search</button>
        </Link>
    </nav>
}