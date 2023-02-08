import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import GlobalContext from "./GlobalContext.jsx";
import "../styles/registerpage.css"

export default function (props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const {register} = useContext(GlobalContext)

    const postUser = (event) => {
        event.preventDefault()
        register(email, password)
    }


    return <>
        <h1 id={"title-register-page"}>Create New Account</h1>
        <div className={"container"}>

            <form action="javascript:void(0)" onSubmit={postUser}>
                <input value={name} onChange={event => setName(event.target.value)} type='name' placeholder='Name'
                       name='name'/>
                <input value={email} onChange={event => setEmail(event.target.value)} type='email' placeholder='Email'
                       name='email'/>
                <input value={password} onChange={event => setPassword(event.target.value)} type='password'
                       placeholder='Password' name='password'/>

                <input id={"register-button"} type='submit' name='submit' value='Register'/>
            </form>
            <Link to="/login">
                <button id={"login-button-register-page"}>Already have an account? Log in here</button>
            </Link>
        </div>

    </>
}
