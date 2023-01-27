import {Link} from "react-router-dom";

export default function () {
    return <nav>
        <Link to="/">
            <button>Home</button>
        </Link>

        <Link to="/artists">
            <button>About Artists</button>
        </Link>

        <Link to="/filterpage">
            <button>Advanced search</button>
        </Link>

        <Link to="/signUpPage">
            <button>Sign up</button>
        </Link>

        <Link to="/login">
            <button>Log in</button>
        </Link>
    </nav>
}