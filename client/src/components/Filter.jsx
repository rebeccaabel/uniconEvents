import { useRef, useState } from "react";
import Card from "./EventCard";
import {
    sortBetweenTwoDates,
    sortByLocation,
    sortByMostRecentAdded,
    sortIfNextYear,
    sortIfThisMonth,
    sortIfThisWeek,
    sortIfThisYear,
    sortIfToday,
    sortIfTomorrow
} from "./artistArrayFunctions";


export default function () {
    let [sortedArray, setFilter] = useState([])
    let startDate = useRef(null)
    let endDate = useRef(null)

    function mostRecentEventsFilter() {
        setFilter(sortedArray = sortByMostRecentAdded)
    }

    function todayEventsFilter() {
        setFilter(sortedArray = sortIfToday)
    }

    function tomorrowEventsFilter() {
        setFilter(sortedArray = sortIfTomorrow)
    }

    function thisWeekEventsFilter() {
        setFilter(sortedArray = sortIfThisWeek)
    }

    function thisMonthEventsFilter() {
        setFilter(sortedArray = sortIfThisMonth)
    }

    function thisYearEventsFilter() {
        setFilter(sortedArray = sortIfThisYear)
    }

    function nextYearEventsFilter() {
        setFilter(sortedArray = sortIfNextYear)
    }

    function locationFilter(input) {
        setFilter(sortedArray = sortByLocation(input))
    }

    function sortBetweenTwoDatesFilter(input1, input2) {
        setFilter(sortedArray = sortBetweenTwoDates(input1, input2))
    }

    return <>
        <EventFilter/>

        <div className="card-area-wrapper">
        <DisplayResults/>
        </div>
    </>

    function EventFilter() {
        return <div className="filter-container">
        <DatesFilter />
        <CitiesFilter />
        <TwoDatesFilter />
        <SearchButton />
    </div>
    }

    function DisplayResults() {
    return <div className="card-area">
                {
                    sortedArray.map(artist => <Card title={artist.title} text={artist.text} image={artist.image} />)
                }
            </div>
    }

    function CitiesFilter() {
        return <div className="city-filters">
            <button value="Malmö" onClick={e => locationFilter(e.target.value)}>Malmö</button>
            <button value="Stockholm" onClick={e => locationFilter(e.target.value)}>Stockholm</button>
            <button value="Göteborg" onClick={e => locationFilter(e.target.value)}>Göteborg</button>
            <button value="Borås" onClick={e => locationFilter(e.target.value)}>Borås</button>
            <button value="Skövde" onClick={e => locationFilter(e.target.value)}>Skövde</button>
        </div>
    }

    function DatesFilter() {
        return <div className="date-filters">
            <button onClick={todayEventsFilter}>Today</button>
            <button onClick={tomorrowEventsFilter}>Tomorrow</button>
            <button onClick={thisWeekEventsFilter}>This Week</button>
            <button onClick={thisMonthEventsFilter}>This Month</button>
            <button onClick={thisYearEventsFilter}>This Year</button>
            <button onClick={nextYearEventsFilter}>Next Year</button>
            <button onClick={mostRecentEventsFilter}>Recently added events</button>
        </div>
    }

    function TwoDatesFilter() {
        return <div className="two-dates-filter">
            <p>Start Date:<input type="date" ref={startDate} /></p>
            <p>End Date<input type="date" ref={endDate} /></p>
        </div>
    }

    function SearchButton() {
        return <button id="filter-page-search-button" onClick={() => sortBetweenTwoDatesFilter(startDate, endDate)}>Search</button>
    }
}