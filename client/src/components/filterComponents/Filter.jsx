import { useContext, useRef, useState } from "react";
import Eventcard from "../Eventcard.jsx";
import GlobalContext from "../GlobalContext.jsx";
import BandOptions from "./BandOptions.js";
import Dropdown from "./FilterDropdown.jsx";
import VenueOptions from "./VenueOptions.js";

export default function () {
    const { concerts } = useContext(GlobalContext)
    let [sortedArray, setSortedArray] = useState([])
    const [selectedVenue, setSelectedVenue] = useState(null)
    const [selectedBand, setSelectedBand] = useState(null)
    const startDate = useRef(null)
    const endDate = useRef(null)
    const currentDate = new Date().toJSON().slice(0, 10);

    const selectBand = (band) => {
        setSelectedBand(band)
    }
    const selectVenue = (venue) => {
        setSelectedVenue(venue)
    }

    function filterArray() {
        const cloneConcerts = [...concerts]
        console.log(startDate.current.value)
        for (let i = cloneConcerts.length - 1; i >= 0; i--) {
            if (selectedBand &&
                cloneConcerts[i].name !== selectedBand) {
                cloneConcerts.splice(i, 1)
            } else if (selectedVenue &&
                cloneConcerts[i].venue !== selectedVenue) {
                cloneConcerts.splice(i, 1)
            }/* else if (startDate && endDate &&
                cloneConcerts[i].datum.getTime() !> startDate.getTime() &
                cloneConcerts[i].datum.getTime() !< endDate.getTime()) {
                cloneConcerts.splice(i,1) 
        } */
        }
        return setSortedArray(sortedArray = cloneConcerts)
    }

    function DisplayResults() {
        return <div className="card-area-wrapper">
            <div className="card-area">
                {
                    sortedArray.map(concert => <Eventcard details={concert}/>)
                }
            </div>
        </div>
    }

    function TwoDatesFilter() {
        return <div className="two-dates-filter">
            <p>Start Date:<input type="date" min={currentDate} defaultValue={currentDate} ref={startDate} /></p>
            <p>End Date<input type="date" min={currentDate} defaultValue={currentDate} ref={endDate} /></p>
        </div>
    }

    function SearchButton() {
        return<div class="button-wrap">
         <button className="search-button" onClick={() => { filterArray() }}>Search</button>
        </div>    
}

    return <>
        <div className="filter-container">
            <Dropdown isSearchable placeHolder="Select Venue..." options={VenueOptions()} selection={selectVenue} />
            <Dropdown isSearchable placeHolder="Select Band..." options={BandOptions()} selection={selectBand} />
            <TwoDatesFilter />
            <SearchButton />
        </div>
        <DisplayResults />
    </>
}