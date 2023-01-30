import {useRef, useState} from "react";
import Card from "./Card.jsx";
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
    const [sortedArray, setSortedArray] = useState([])
    const startDate = useRef(null)
    const endDate = useRef(null)

    return <>
        <h1>Filter by date</h1>
        <div className="filter-container">
            <EventFilter/>
            <EventCards/>
        </div>
    </>

    function EventFilter() {
        return <>
            <DateFilters/>
            <CitiesFilter/>
            <DatePicker/>
            <SearchButton/>
        </>

    }

    function EventCards() {
        return <div className="card-area">
            {sortedArray.map(artist => <Card artist={artist}/>)}
        </div>
    }

    function SearchButton() {
        return <button onClick={() => sortBetweenTwoDatesFilter(startDate, endDate)}>Search</button>
    }

    function DatePicker() {
        return <form className="date-picker">
            <p>Please input start date</p>
            <input type="date" ref={startDate}/>
            <p>Please input end date</p>
            <input type="date" ref={endDate}/>
        </form>
    }


    function CitiesFilter() {
        return <div className="filter-buttons-cities">
            <button value="Malmö" onClick={e => locationFilter(e.target.value)}>Malmö</button>
            <button value="Stockholm" onClick={e => locationFilter(e.target.value)}>Stockholm</button>
            <button value="Göteborg" onClick={e => locationFilter(e.target.value)}>Göteborg</button>
            <button value="Borås" onClick={e => locationFilter(e.target.value)}>Borås</button>
            <button value="Skövde" onClick={e => locationFilter(e.target.value)}>Skövde</button>
        </div>
    }

    function mostRecentEventsFilter() {
        setSortedArray(sortByMostRecentAdded)
    }

    function todayEventsFilter() {
        setSortedArray(sortIfToday)
    }

    function tomorrowEventsFilter() {
        setSortedArray(sortIfTomorrow)
    }

    function thisWeekEventsFilter() {
        setSortedArray(sortIfThisWeek)
    }

    function thisMonthEventsFilter() {
        setSortedArray(sortIfThisMonth)
    }

    function thisYearEventsFilter() {
        setSortedArray(sortIfThisYear)
    }

    function nextYearEventsFilter() {
        setSortedArray(sortIfNextYear)
    }

    function locationFilter(input) {
        setSortedArray(sortByLocation(input))
    }

    function sortBetweenTwoDatesFilter(input1, input2) {
        setSortedArray(sortBetweenTwoDates(input1, input2))
    }
    function DateFilters() {
        return <div className="filter-buttons-dates">
            <button onClick={todayEventsFilter}>Today</button>
            <button onClick={tomorrowEventsFilter}>Tomorrow</button>
            <button onClick={thisWeekEventsFilter}>This Week</button>
            <button onClick={thisMonthEventsFilter}>This Month</button>
            <button onClick={thisYearEventsFilter}>This Year</button>
            <button onClick={nextYearEventsFilter}>Next Year</button>
            <button onClick={mostRecentEventsFilter}>Recently added events</button>
        </div>
    }
}

