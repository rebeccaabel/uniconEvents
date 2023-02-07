import Searchbar from "./Searchbar.jsx";
import Navbar from "./Navbar.jsx";

export default function () {
    return <div className="searchbar-and-navbar-wrapper">
        <div className="search-header">
            <Searchbar />
        </div>
        <div className="nav-header">
            <Navbar />
        </div>
    </div>
}