import artistArray from "../components/artistArray.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Searchbar from "../components/Searchbar.jsx";
import Footer from "../components/Footer.jsx";


export default function () {

    return <>
        <Header/>
        <Navbar/>
        <Searchbar/>
        <Filter/>
        <ArtistArray/>

        <Footer/>
    </>

}