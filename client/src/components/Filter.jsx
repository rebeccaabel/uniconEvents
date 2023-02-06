import {useRef, useState} from "react";
import Card from "./EventCard";


export default function () {
    let [sortedArray, setFilter] = useState([])
    let startDate = useRef(null)
    let endDate = useRef(null)

    /* function mostRecentEventsFilter() {
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
 */
    return <>
            <div className="filter-container">
                <div className="filter-buttons-dates">

                </div>
              <CitiesFilter/>


                    <form className="date-form">
                        <div id='start-date'>
                            <p>Start date</p>
                            <input type="date" ref={startDate}/>
                        </div>
                        <div id='end-date'>
                            <p>End date</p>
                            <input type="date" ref={endDate}/>
                            <button>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>






                <div className="card-area-wrapper">
                    <div className="card-area">
                        {
                            sortedArray.map(artist => <Card title={artist.title} text={artist.text}
                                                            image={artist.image}/>)
                        }
                    </div>
                </div>
            </div>
    </>
    function CitiesFilter() {
        return   <div className="filter-buttons-cities">
            <button value="Malmö" onClick={e => locationFilter(e.target.value)}>Malmö</button>
            <button value="Stockholm" onClick={e => locationFilter(e.target.value)}>Stockholm</button>
            <button value="Göteborg" onClick={e => locationFilter(e.target.value)}>Göteborg</button>
            <button value="Borås" onClick={e => locationFilter(e.target.value)}>Borås</button>
            <button value="Skövde" onClick={e => locationFilter(e.target.value)}>Skövde</button>
        </div>
    }
}