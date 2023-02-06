import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import GlobalContext from "./GlobalContext.jsx";
export default function (props) {
    const [email, setEmail] = useState("");
    const[name, setName]= useState("")
    const[password, setPassword] = useState("")

    const {register} = useContext(GlobalContext)

    const postUser = (event) => {
        event.preventDefault()
        register(email,password)
    }


    return <>
        <h1 style={{color:"white"}}>Create New Account</h1>
        <form action="javascript:void(0)" onSubmit={postUser}>
            <label htmlFor='name'>Name:</label>
            <input value={name} onChange={event => setName(event.target.value)} type='name' placeholder='Name' name='name'/>
            <label htmlFor='email'>Email:</label>
            <input value={email}  onChange={event => setEmail(event.target.value)} type='email' placeholder='Email' name='email' />
            <label htmlFor='password'>Password:</label>
            <input value={password} onChange={event => setPassword(event.target.value)} type='password' placeholder='Password' name='password'/>

            <input type='submit' name='submit' value='Register'/>
        </form>
        <Link to="/login">
            <button>Already have an account? Log in here</button>
        </Link>
    </>
}
