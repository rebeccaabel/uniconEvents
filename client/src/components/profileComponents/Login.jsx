import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import GlobalContext from "../GlobalContext.jsx";
import "../../styles/loginpage.css"

export default function () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const {submitLogin} = useContext(GlobalContext)
    const nav = useNavigate()


    const fetchUser = (event) => {
        event.preventDefault()
        submitLogin(email, password)
        nav("/")
    }

    return <>
        <h1 id={"title-login-page"}>{'Log in'}</h1>
        <div className="container">
            <form action="javascript:void(0)" onSubmit={fetchUser}>
                <input value={email}
                       onChange={event => setEmail(event.target.value)}
                       type='email'
                       placeholder='Email'
                       id='email'
                       name='email'/>
                <input value={password}
                       onChange={event => setPassword(event.target.value)}
                       type='password'
                       placeholder='Password'
                       id='password'
                       name='password'/>
                <button id="login-page-button">Log in</button>
            </form>

            <Link to="/register">
                <button id={"register-button-login-page"}>Don't have an account? Register.</button>
            </Link>
        </div>

    </>

}

