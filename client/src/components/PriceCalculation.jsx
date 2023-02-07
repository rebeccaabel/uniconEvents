import {artists} from "../components/Artistarray.jsx";
import React from "react";
import {SelectedDataContext} from "../components/SelectDropdown.jsx";

export default function () {
    const {selectedValue} = React.useContext(SelectedDataContext)
    console.log(selectedValue)
    let price = artists[0].pricePerTicket;
    let sum = {selectedValue} * {price}
    return <> {sum} </>

}