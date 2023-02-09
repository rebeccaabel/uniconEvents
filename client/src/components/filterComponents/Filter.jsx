import { useContext, useRef, useState } from "react";
import Eventcard from "../Eventcard.jsx";
import GlobalContext from "../GlobalContext.jsx";
import BandOptions from "./BandOptions.js";
import EndTimestamp from "./EndTimestamp.js";
import Dropdown from "./FilterDropdown.jsx";
import StartTimestamp from "./StartTimestamp.js";
import VenueOptions from "./VenueOptions.js";

export default function () {
    const { concerts } = useContext(GlobalContext)
    const [selectedVenue, setSelectedVenue] = useState(null)
    const [selectedBand, setSelectedBand] = useState(null)
    const startDate = useRef(null)
    const endDate = useRef(null)
    let [filteredArray, setfilteredArray] = useState([])

    function filterArray() {
        const cloneConcerts = [...concerts]

        for (let i = cloneConcerts.length - 1; i >= 0; i--) {
            const concertTimestamp = new Date(cloneConcerts[i].datum).getTime()

            if (startDate && endDate &&
                concertTimestamp <= StartTimestamp(startDate.current.value) ||
                concertTimestamp >= EndTimestamp(endDate.current.value)) {
                cloneConcerts.splice(i, 1)
            } else if (selectedBand &&
                cloneConcerts[i].name !== selectedBand) {
                cloneConcerts.splice(i, 1)
            } else if (selectedVenue &&
                cloneConcerts[i].venue !== selectedVenue) {
                cloneConcerts.splice(i, 1)
            }
        }
        cloneConcerts.sort((a, b) => a.datum.localeCompare(b.datum, undefined, { numeric: true }))
        return setfilteredArray(filteredArray = cloneConcerts)
    }

    function DisplayResults() {
        return <div className="card-area-wrapper">
            <div className="card-area">
                {
                    filteredArray.map(concert => <Eventcard details={concert} />)
                }
            </div>
        </div>
    }

    function TwoDatesFilter() {
        return <div className="two-dates-filter">
            <p>Start Date:<input type="date" defaultValue={"2022-09-15"} ref={startDate} /></p>
            <p>End Date:<input type="date" defaultValue={"2022-09-30"} ref={endDate} /></p>
        </div>
    }

    function SearchButton() {
        return <div className="button-wrap">
            <button className="search-button" onClick={() => { filterArray() }}>Search</button>
        </div>
    }

    return <>
        <div className="filter-container">
            <Dropdown isSearchable placeHolder="Select Band..." options={BandOptions()} selection={setSelectedBand} />
            <Dropdown isSearchable placeHolder="Select Venue..." options={VenueOptions()} selection={setSelectedVenue} />
            <TwoDatesFilter />
            <SearchButton />
        </div>
        <DisplayResults />
    </>
}