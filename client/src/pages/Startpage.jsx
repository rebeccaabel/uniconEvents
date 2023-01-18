import {Link} from "react-router-dom";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Searchbar from "../components/Searchbar.jsx";
import EventsStartpage from "../components/PopularEvents.jsx";
import PopularEvents from "../components/PopularEvents.jsx";
import Card from "../components/Card.jsx";
import Footer from "../components/Footer.jsx";

export default function () {
    return <>
        <Header/>
        <Navbar/>
        <Searchbar/>
        <PopularEvents/>
        <Card/>
        <Footer/>
    </>

}
