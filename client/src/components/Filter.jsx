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
import { artists } from "./artistArray";


export default function () {
    
    let [sortedArray, setFilter] = useState([])
    let startDate = useRef(null)
    let endDate = useRef(null)
    let todayFilter = false
    let tomorrow = false
    let thisWeek = false
    let thisMonth = false
    let thisYear = false
    let nextYear = false

    function filterArray() {
        let tempArray = artists
        let returnArray = tempArray
        const today = new Date()

        for (let i = 0; i < tempArray.length; i++) {
            if (todayFilter &&
                tempArray[i].date.getDate() == today.getDate() &&
                tempArray[i].date.getMonth() == today.getMonth() &&
                tempArray[i].date.getFullYear() == today.getFullYear()
                
            ) {
                returnArray = tempArray.splice(i, 1)
            }

        if (tomorrow) {

        }

        if (thisWeek) {

        }

        if (thisMonth &&
            tempArray[i].date.getMonth() == today.getMonth() &&
            tempArray[i].date.getFullYear() == today.getFullYear()
            ) {
            returnArray = tempArray.splice(i, 1)
        }
        
        

        if (thisYear) {

        }

        if (nextYear) {

        }
    }
    console.log(todayFilter)
    console.log(tempArray.length)
    return setFilter(returnArray)
}
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

    
    function handleButtonColor(input) {
        if(input.style.backgroundColor == "black")
        {input.style.backgroundColor = "white"}
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
    return <div id="filterwrapper-card-area">
            <div className="card-area">
                {
                    sortedArray.map(artist => <Card title={artist.title} text={artist.text} image={artist.image} />)
                }
            </div>
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
            <button onClick={e => e.target.style.backgroundColor="purple"}>Today</button>
            <button>Tomorrow</button>
            <button onClick={thisWeekEventsFilter}>This Week</button>
            <button onClick={() => {if (!thisMonth){thisMonth = true} else {thisMonth = false}}}>This Month</button>
            <button onClick={thisYearEventsFilter}>This Year</button>
            <button onClick={nextYearEventsFilter}>Next Year</button>
            <button onClick={mostRecentEventsFilter}>Recently added events</button>
            <DateButton/>
            <DateButton/>
            <DateButton/>
        </div>
    }

    function DateButton() {
        const [active, setActive] = useState(false);
        const handleClick = () => {
            setActive(!active);
          };
          
        return <button
        onClick={handleClick}
        style={{ backgroundColor: active ? "gray" : "black" }}
      />
    }

    function TwoDatesFilter() {
        return <div className="two-dates-filter">
            <p>Start Date:<input type="date" ref={startDate} /></p>
            <p>End Date<input type="date" ref={endDate} /></p>
        </div>
    }

    function SearchButton() {
        return <button id="filter-page-search-button" onClick={() => {filterArray()}}>Search</button>
    }
}

/* sortBetweenTwoDatesFilter(startDate, endDate) */