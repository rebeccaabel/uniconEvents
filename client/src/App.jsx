import './styles/App.css'
import {Outlet} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {GlobalProvider} from "./components/GlobalContext.jsx";


export default function () {
    return <GlobalProvider>
        <Header/>
        <Outlet/>
        <Footer/>
    </GlobalProvider>

}


