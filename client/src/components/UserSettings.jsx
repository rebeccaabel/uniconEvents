import {useContext, useEffect, useState} from "react";
import GlobalContext from "./GlobalContext.jsx";

export default function () {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const {updatePassword, getPassword} = useContext(GlobalContext)


    const changePassword = (event) => {
        event.preventDefault()
        getPassword(currentPassword)
        updatePassword(newPassword)
    }

        console.log(getPassword)

    console.log(updatePassword)

    return <div className='contact-information'>
        <h2>Change password</h2>
        <form onSubmit={changePassword}>
            <input  value={currentPassword}  onChange={event => setCurrentPassword(event.target.value)} placeholder="Old Password" type='password' name='password'/>
            <input  value={newPassword}  onChange={event => setNewPassword(event.target.value)} placeholder="New Password" type='password' name='password'/>
            <input type='submit' name='submit' value='Change Password'/>
        </form>

    </div>

}

