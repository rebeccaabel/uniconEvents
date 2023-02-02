import { useContext, useState } from "react";
import GlobalContext from "../GlobalContext.jsx";
import Tidbits from "./Tidbits.jsx";

export default function Welcome(){

    const { auth } = useContext(GlobalContext);

    return <section>
        <h2>{ auth.loggedIn? 'Welcome ' + auth.email : 'Welcome stranger' }</h2>
        <Tidbits/>
    </section>
}