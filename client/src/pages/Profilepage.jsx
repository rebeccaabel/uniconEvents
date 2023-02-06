import SideNavbar from "../components/Sidenavbar.jsx";
import {Outlet} from "react-router-dom";
import '../styles/profile-page.css'

export default function () {
    return <div className={'profile-page'}>
        <SideNavbar/>
        <Outlet/>
    </div>


}