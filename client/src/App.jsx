
import './styles/App.css'
import './styles/Filterpage.css'
import './styles/Paymentpage.css'
import {Outlet} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


export default function () {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>

}



