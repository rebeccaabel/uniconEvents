import SideNavbar from "../components/profileComponents/Sidenavbar.jsx";
import {Outlet} from "react-router-dom";
import '../styles/profile-page.css'
import '../styles/calender.css'

export default function () {
    return <div className={'profile-page'}>
        <SideNavbar/>
        <Outlet/>
    </div>





}