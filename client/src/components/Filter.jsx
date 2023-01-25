import {useRef, useState} from "react";
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
        <h1>Filter by date</h1>
        <div className="filter-container-wrapper">
            <div className="filter-container">
                <div className="filter-buttons-dates">
                    <button onClick={todayEventsFilter}>Today</button>
                    <button onClick={tomorrowEventsFilter}>Tomorrow</button>
                    <button onClick={thisWeekEventsFilter}>This Week</button>
                    <button onClick={thisMonthEventsFilter}>This Month</button>
                    <button onClick={thisYearEventsFilter}>This Year</button>
                    <button onClick={nextYearEventsFilter}>Next Year</button>
                    <button onClick={mostRecentEventsFilter}>Recently added events</button>
                </div>
                <div className="filter-buttons-cities">
                    <button value="Malmö" onClick={e => locationFilter(e.target.value)}>Malmö</button>
                    <button value="Stockholm" onClick={e => locationFilter(e.target.value)}>Stockholm</button>
                    <button value="Göteborg" onClick={e => locationFilter(e.target.value)}>Göteborg</button>
                    <button value="Borås" onClick={e => locationFilter(e.target.value)}>Borås</button>
                    <button value="Skövde" onClick={e => locationFilter(e.target.value)}>Skövde</button>
                </div>

                <div className="calender-container">

                    <form className="date-form">
                        <p>Please input start date</p>
                        <input type="date" ref={startDate}/>
                    </form>

                    <form className="date-form">
                        <p>Please input end date</p>
                        <input type="date" ref={endDate}/>
                    </form>

                </div>
                <div className="calender-container">
                    <button onClick={() => sortBetweenTwoDatesFilter(startDate, endDate)}>Search</button>
                </div>
                <div className="card-area-wrapper">

                    <div className="card-area">
                        {
                            sortedArray.map(artist => <Card title={artist.title} text={artist.text}
                                                            image={artist.image}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}