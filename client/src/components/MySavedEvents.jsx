import {artists} from "./artistArray.jsx";
import React from "react";



export default function () {
    return <div>
        <ShowSavedEvent/>
    </div>


    function ShowSavedEvent() {
        for (let i = 0; i < artists.length; i++) {
                if (artists[i].wishList = true){
                  console.log("saved")
            } else {console.log("not saved")}
        }

    }
}

