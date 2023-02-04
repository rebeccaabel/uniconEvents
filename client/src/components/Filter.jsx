import { useContext, useRef, useState } from "react";
import Card from "./EventCard";
import { sortByMostRecentAdded } from "./artistArrayFunctions";
import GlobalContext from "./GlobalContext";


export default function () {
    const { concerts } = useContext(GlobalContext)
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
        const today = new Date("SEP 17 - 07:00")
        let cloneConcerts = [...concerts]
        let isToday = dateButtonDataArray[0].isOn
        let isTomorrow = dateButtonDataArray[1].isOn
        let isThisWeek = dateButtonDataArray[2].isOn
        let isThisMonth = dateButtonDataArray[3].isOn
        let isThisYear = dateButtonDataArray[4].isOn
        let isNextYear = dateButtonDataArray[5].isOn
        for (let i = cloneConcerts.length-1; i >= 0; i--){
            const eventDate = new Date(cloneConcerts[i].datum)
        if (isToday &&
            eventDate.getDate() !== today.getDate() ||
            eventDate.getMonth() !== today.getMonth() ||
            eventDate.getFullYear() !== today.getFullYear()
        ) {
            cloneConcerts.splice(i,1)
        } 

         else if (isTomorrow &&
            eventDate.getDate() == today.getDate() + 1 &&
            eventDate.getMonth() == today.getMonth() &&
            eventDate.getFullYear() == today.getFullYear()
        ) {
            cloneConcerts.splice(i,1)
        }

        else if (isThisWeek &&
            eventDate.getDate() == today.getDate() + 7 &&
            eventDate.getMonth() == today.getMonth() &&
            eventDate.getFullYear() == today.getFullYear()
        ) {
            cloneConcerts.splice(i,1)
        }

        else if (isThisMonth &&
            eventDate.getMonth() == today.getMonth() &&
            eventDate.getFullYear() == today.getFullYear()
        ) {
            cloneConcerts.splice(i,1)
        }

        else if (isThisYear &&
            eventDate.getFullYear() == today.getFullYear()
        ) {
            cloneConcerts.splice(i,1)
        }

        if (isNextYear &&
            eventDate.getFullYear() == today.getFullYear() + 1
        ) {
            cloneConcerts.splice(i,1)
        } 
    }
    return setFilter(sortedArray = cloneConcerts)
}

    function mostRecentEventsFilter() {
        let cloneConcerts = [...concerts]
        cloneConcerts.sort((a,b) => {
            return b.id - a.id
        })
        setFilter(sortedArray = cloneConcerts.slice(0,10))
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