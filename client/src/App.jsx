import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Startpage from "./pages/Startpage.jsx";
import './Filterpage.css'
import './Paymentpage.css'
import './Sectionpage.css'
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



