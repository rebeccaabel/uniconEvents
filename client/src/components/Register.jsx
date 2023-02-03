import React, {useState} from "react";
import {Link} from "react-router-dom";
export default function (props) {
    const [email, setEmail] = useState("");
    const[name, setName]= useState("")
    const[password, setPassword] = useState("")

    const handleSubmit = (event) => {
       event.preventDefault()
        console.log(email)
    }


    return <>
        <h1 style={{color:"white"}}>Create New Account</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='Name'>Name:</label>
            <input value={name} onChange={event => setName(event.target.value)} type='name' placeholder='Name' id='name' name='name.ea'/>
            <label htmlFor='Email'>Email:</label>
            <input value={email}  onChange={event => setEmail(event.target.value)} type='email' placeholder='Email' id='email' name='email' />
            <label htmlFor='Password'>Password:</label>
            <input value={password} onChange={event => setPassword(event.target.value)} type='password' placeholder='Password' id='password' name='password'/>
            <button>Register</button>
        </form>
        <Link to="/login">
            <button>Already have an account? Log in here</button>
        </Link>
    </>
}
