import {Link} from "react-router-dom";

export default function () {
    return <nav>
        <Link to="/startpage">
            <button>
                Home
            </button>
        </Link>
        <Link to="/artists">
            <button>
                About Artists
            </button>
        </Link>
        <Link to="events">
            <button>
                Work with us
            </button>
        </Link>
        <Link to="events">
            <button>
                About Us
            </button>
        </Link>

    </nav>
}