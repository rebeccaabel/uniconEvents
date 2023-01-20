import {useEffect, useState} from "react";


export function clearInput(){
    let getValue = document.getElementsByTagName("input");
    for (let i = 0; i<getValue.length; i++) {
        console.log(getValue[i].value); // logs out the string value

        if(getValue[i].type === "text"){
            getValue[i].value = ""
        }
    }

}
function displayUpdate(target){
    document.querySelector(".updated-settings").innerHTML = "Updated"
//Can be updated once we get the backend data
    clearInput()
}

export default function () {
    return <>
        <div className='contact-information-container'>
            <h2>Contact Information</h2>
            <div className="updated-settings"></div>
            <input placeholder="Name"/>
            <input placeholder="Surname"/>
            <input placeholder="E-mail"/>
            <input placeholder="Address"/>
            <button className="update-btn" onClick={displayUpdate}>Save</button>

        </div>



    </>
}