import {Link} from "react-router-dom";

export default function () {
    return <nav>
        <Link to="events">
            <button>
                Events
            </button>
        </Link>
        <Link to="artists">
            <button>
                Artist
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