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
                Test
            </button>
        </Link>
        <Link to="events">
            <button>
                Test
            </button>
        </Link>

    </nav>
}