import {useEffect, useState} from "react";

export default function () {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')

    return <div className='contact-information'>
        <h2>Contact Information</h2>
        <div className="updated-settings"></div>
        <input onChange={(event) => setName(event.target.value)} placeholder="Name" value={name}/>
        <input onChange={(event) => setSurname(event.target.value)} placeholder="Surname" value={surname}/>
        <input placeholder="E-mail"/>
        <input onChange={(event) => setPassword(event.target.value)} placeholder="Password" value={password}/>
        <button onClick={submit} className="update-button">Save</button>
    </div>

    function submit() {
        //todo: implement push updated user info to server

    }

}

