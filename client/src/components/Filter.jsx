import { useContext, useRef, useState } from "react";
import Card from "./EventCard";
import GlobalContext from "./GlobalContext";
import "../styles/Dropdown.css"
import Dropdown from "./FilterDropdown";

export default function () {
    const { concerts } = useContext(GlobalContext)
    let [sortedArray, setSortedArray] = useState([])
    const [selectedVenue, setSelectedVenue] = useState(null)
    const [selectedBand, setSelectedBand] = useState(null)
    const startDate = useRef(null)
    const endDate = useRef(null)
    
    const venueOptions = concerts.map(a => a.venue)
    let uniqueVenueOptions = venueOptions.filter((c, index) => {
        return venueOptions.indexOf(c) === index
    })
    const bandOptions = concerts.map(a => a.name)
    let uniqueBandOptions = bandOptions.filter((c, index) => {
        return bandOptions.indexOf(c) === index
    })

    const selectBand = (band) => {
        setSelectedBand(band)
    }
    const selectVenue = (venue) => {
        setSelectedVenue(venue)
    }

    function filterArray() {
        const today = new Date("SEP 17 - 07:00")
        let cloneConcerts = [...concerts]

        for (let i = cloneConcerts.length - 1; i >= 0; i--) {
            if (selectedBand &&
                cloneConcerts[i].name !== selectedBand) {
                cloneConcerts.splice(i,1)
            }else if (selectedVenue &&
                cloneConcerts[i].venue !== selectedVenue){
                cloneConcerts.splice(i,1)
            }/* 
            
            ************START WORKING ON THIS************
            *****NEED TO REVERSE THE OUTCOME AND*********
            ********CHECK IF THE STARTDATE AND***********
            ***********ENDDATE VARIABLES HAVE************
            *****************ANY INPUT*******************
            else if (
                cloneConcerts[i].date.getTime() > startDate.getTime() &
                cloneConcerts[i].date.getTime() < endDate.getTime()) {
                cloneConcerts.splice(i,1) 
        }
        */
        }
        return setSortedArray(sortedArray = cloneConcerts)
    }

    function mostRecentEventsFilter() {
        let cloneConcerts = [...concerts]
        cloneConcerts.sort((a, b) => {
            return b.id - a.id
        })
        setFilter(sortedArray = cloneConcerts.slice(0, 10))
    }

    function DisplayResults() {
        return <div id="filterwrapper-card-area">
            <div className="card-area">
                {
                    sortedArray.map(artist => <Card title={artist.name} venue={artist.venue} image={artist.image} />)
                }
            </div>
        </div>
    }

    function TwoDatesFilter() {
        return <div className="two-dates-filter">
            <p>Start Date:<input type="date" ref={startDate} /></p>
            <p>End Date<input type="date" ref={endDate} /></p>
        </div>
    }

    function SearchButton() {
        return <button id="filter-page-search-button" onClick={() => { filterArray() }}>Search</button>
    }

    function EventFilter() {
        return <div className="filter-container">
            <Dropdown isSearchable placeHolder="Select Venue..." options={uniqueVenueOptions} selection={selectVenue} />
            <Dropdown isSearchable placeHolder="Select Band..." options={uniqueBandOptions} selection={selectBand}/>
            <TwoDatesFilter />
            <SearchButton />
        </div>
    }
 
    return <>
        <EventFilter />
        <div className="card-area-wrapper">
            <DisplayResults />
        </div>
    </>
}

/* sortBetweenTwoDatesFilter(startDate, endDate) */