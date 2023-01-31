import { useRef, useState } from "react";
import Card from "./EventCard";
import { sortByMostRecentAdded } from "./artistArrayFunctions";
import { artists } from "./artistArray";

export default function () {

    let [sortedArray, setFilter] = useState([])
    let startDate = useRef(null)
    let endDate = useRef(null)
    let cityButtonDataArray = [
        {
            buttonName: "Malmö",
            isOn: false,
            index: 0
        }, {
            buttonName: "Stockholm",
            isOn: false,
            index: 1
        }, {
            buttonName: "Göteborg",
            isOn: false,
            index: 2
        }, {
            buttonName: "Borås",
            isOn: false,
            index: 3
        }, {
            buttonName: "Skövde",
            isOn: false,
            index: 4
        }
    ]
    let dateButtonDataArray = [
        {
            buttonName: 'Today',
            isOn: false,
            index: 0,
        }, {
            buttonName: 'Tomorrow',
            isOn: false,
            index: 1,
        }, {
            buttonName: 'Within 7 Days',
            isOn: false,
            index: 2,
        }, {
            buttonName: 'This Month',
            isOn: false,
            index: 3,
        }, {
            buttonName: 'This Year',
            isOn: false,
            index: 4,
        }, {
            buttonName: 'Next Year',
            isOn: false,
            index: 5,
        }
    ]

    function filterArray() {
        let tempArray = artists.map(a => { return { ...a } })
        let returnArray = []
        const today = new Date()
        let isToday = dateButtonDataArray[0].isOn
        let isTomorrow = dateButtonDataArray[1].isOn
        let isThisWeek = dateButtonDataArray[2].isOn
        let isThisMonth = dateButtonDataArray[3].isOn
        let isThisYear = dateButtonDataArray[4].isOn
        let isNextYear = dateButtonDataArray[5].isOn
        for (let i = 0; i < artists.length; i++) {
            if (isToday &&
                artists[i].date.getDate() !== today.getDate() ||
                artists[i].date.getMonth() !== today.getMonth() ||
                artists[i].date.getFullYear() !== today.getFullYear()

            ) {
                tempArray.splice(i, 1, "deleted")
                console.log(tempArray)
                
            }

            if (isTomorrow &&
                artists[i].date.getDate() == today.getDate()+1 &&
                artists[i].date.getMonth() == today.getMonth() &&
                artists[i].date.getFullYear() == today.getFullYear()) {

            }

            if (isThisWeek &&
                artists[i].date.getDate() == today.getDate()+7 &&
                artists[i].date.getMonth() == today.getMonth() &&
                artists[i].date.getFullYear() == today.getFullYear()) {

            }

            if (isThisMonth &&
                artists[i].date.getMonth() == today.getMonth() &&
                artists[i].date.getFullYear() == today.getFullYear()) {

            }

            if (isThisYear &&
                artists[i].date.getFullYear() == today.getFullYear()) {


            }

            if (isNextYear &&
                artists[i].date.getFullYear() == today.getFullYear()) {
                    returnArray = (artists.splice(i, 1))
                    tempArray.splice(i, 1)
            }
        }
        return setFilter(tempArray)
    }
    function mostRecentEventsFilter() {
        setFilter(sortedArray = sortByMostRecentAdded)
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

    function TwoDatesFilter() {
        return <div className="two-dates-filter">
            <p>Start Date:<input type="date" ref={startDate} /></p>
            <p>End Date<input type="date" ref={endDate} /></p>
        </div>
    }

    function SearchButton() {
        return <button id="filter-page-search-button" onClick={() => { filterArray() }}>Search</button>
    }

    function CityButton({ type, index }) {
        const [active, setActive] = useState(false);
        const handleClick = () => {
            setActive(!active);
            if (active) {
                { cityButtonDataArray[index].isOn = false; }
            } else { cityButtonDataArray[index].isOn = true };
        };
        return <button
            onClick={() => { handleClick(); }}
            style={{ backgroundColor: active ? "gray" : "black" }}
        >{type}</button>
    }

    function CityButtonGroup() {
        return <div className="city-filters">
            {cityButtonDataArray.map(buttons => <CityButton type={buttons.buttonName} index={buttons.index}></CityButton>)}
        </div>
    }

    function DateButton({ type, index }) {
        const [active, setActive] = useState(false);
        const handleClick = () => {
            setActive(!active);
            if (active) {
                { dateButtonDataArray[index].isOn = false; }
            } else { dateButtonDataArray[index].isOn = true };
        };
        return <button
            onClick={() => { handleClick(); }}
            style={{ backgroundColor: active ? "gray" : "black" }}
        >{type}</button>
    }

    function DateButtonGroup() {
        return <div className="date-filters">
            {dateButtonDataArray.map(buttons => <DateButton type={buttons.buttonName} index={buttons.index}></DateButton>)}
            <button onClick={mostRecentEventsFilter}>Recently added events</button>
        </div>
    }



    function EventFilter() {
        return <div className="filter-container">
            <DateButtonGroup />
            <CityButtonGroup />
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