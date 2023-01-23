import {Link} from "react-router-dom";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Searchbar from "../components/Searchbar.jsx";
import PopularEvents from "../components/PopularEvents.jsx";
import Footer from "../components/Footer.jsx";
import MostRecentEvents from "../components/mostRecentEvents.jsx";
import TodayEvents from "../components/todayEvents.jsx";


export default function () {
    return <>
        <Searchbar/>
        <TodayEvents/>
        <PopularEvents/>
        <MostRecentEvents/>
    </>

}
