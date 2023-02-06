import React, {useContext} from "react";
import Seat from "../Components/Seat.jsx"
import Dropdown from "../Components/SelectDropdown.jsx"
import StageArea from "../Components/StageArea.jsx"

export default function () {

    return <>
        <div id="outer-div1">
            <div id="outer-div">
                <StageArea/>
                <Dropdown/>
                <Seat/>
            </div>
        </div>
    </>
}