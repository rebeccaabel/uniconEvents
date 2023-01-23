import SideNavbar from "../components/Sidenavbar.jsx";
import {Outlet} from "react-router-dom";

export default function () {
    return <>
        <SideNavbar/>
        <Outlet/>
    </>


}