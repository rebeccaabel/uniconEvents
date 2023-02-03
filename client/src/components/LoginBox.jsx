import {useState} from "react";


export default function () {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    return <div>

        <form onSubmit={handleLogIn}>
            <input value={username} type="text" placeholder={"Username"}/>
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
}