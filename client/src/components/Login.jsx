import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import GlobalContext from "./GlobalContext.jsx";
export default function () {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("")
    const {submitLogin} = useContext(GlobalContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        submitLogin(email,password)
    }


    return <>
        <h1 style={{color:"white"}}>Log in</h1>
        <form action="javascript:void(0)" onSubmit={handleSubmit}>
            <label htmlFor='Email'>Email:</label>
            <input value={email}  onChange={event => setEmail(event.target.value)} type='email' placeholder='Email' id='email' name='email' />
            <label htmlFor='Password'>Password:</label>
            <input value={password} onChange={event => setPassword(event.target.value)} type='password' placeholder='Password' id='password' name='password'/>
            <button>Log in</button>
        </form>

       <Link to="/register">
           <button>Don't have an account? Register here</button>
       </Link>



    </>
}

















/*import {useState} from "react";


export default function () {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    return <div>

        <form onSubmit={handleLogIn}>
            <label htmlFor="username"> Username: </label>
            <input value={username} type="text" placeholder={"Username"}/>
            <label htmlFor="username"> Password: </label>
            <input value={password} type="password" placeholder={"Password"}/>
            <button >Log In</button>
        </form>
        <button>Create an account</button>
    </div>

    function handleLogIn(e) {
        console.log("eerewf")
        setUsername(e.target.value)
        setPassword(e.target.value)
        console.log('test')
    }
}*/

