import Buttons from "../Components/Seat.jsx"
import {Link} from "react-router-dom"
import React, {useContext} from "react";
import Seat from "../Components/Seat.jsx"
import Dropdown from "../Components/SelectDropdown.jsx"
import DisplayDetailsPricing from "../Components/DisplayDetailsPricing.jsx"
import StageArea from "../Components/StageArea.jsx"

export default function () {
    return <>
        <div id="outer-div1">
            <div id="outer-div">
                <StageArea/>
                <Dropdown/>
                <Seat/>
                <DisplayDetailsPricing/>
            </div>
        </div>
    </>
}