import {useContext, useEffect, useState} from "react";
import GlobalContext from "./GlobalContext.jsx";

export default function () {
    const {getPassword,newPassword,setNewPassword} = useContext(GlobalContext)



    const changePassword = (event) => {
        getPassword()
        event.preventDefault()


    }


    return <div className='contact-information'>
        <h2>Change password</h2>
        <form onSubmit={changePassword}>
            <input value={newPassword} onChange={event => setNewPassword(event.target.value)} placeholder="New Password"
                   type='password' name='password'/>
            <input type='submit' name='submit' value='Change Password'/>
        </form>

    </div>
}
