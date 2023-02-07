import Seat from "./Seat.jsx";
import StageArea from "./StageArea.jsx";
import Dropdown from "./SelectDropdown.jsx"

export default function () {
    return <div id="outer-div1">
            <div id="outer-div">
                <StageArea/>
                <Dropdown/>
                <Seat/>
            </div>
        </div>
}