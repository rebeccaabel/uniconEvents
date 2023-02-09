import React, {useContext, useEffect, useState} from 'react'
import GlobalContext from "../GlobalContext.jsx";
import SavedCard from "./SavedCard.jsx";



export default function () {
    const {wishlists} = useContext(GlobalContext)
    const [date, setDate] = useState(new Date())
    const [filteredEvents, setFilteredEvents] = useState(...wishlists)
    const [saved, setSaved] = useState("You have no saved events this month")

    useEffect(() => {
        setFilteredEvents(wishlists)

    }, [])

    return <>
        <div id={"my-events"}>
            <EventNav/>
        </div>
    </>
    function EventNav() {
        return <div className={"saved-card"}>
            <SelectYear/>
            <SelectMonth/>
            <h3>{date.toLocaleString("en-GB", {month: "long"})}</h3>
            <h5>{saved}</h5>
            <PrintArtist/>
        </div>
    }
    function SelectYear() {
        return <>
            <div id={"select-year"}>
                <button className="next" onClick={decrementYear}><i className="fa-solid fa-arrow-left"></i></button>
                <h4>{date.getFullYear()}</h4>
                <button className="next" onClick={incrementYear}><i className="fa-solid fa-arrow-right"></i></button>
            </div>

        </>
    }
    function SelectMonth() {
        return <div id={"select-month"}>
            <button className="prev" onClick={decrementMonth}><i className="fa-solid fa-arrow-left"></i></button>
            <button className="next" onClick={incrementMonth}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    }

   function PrintArtist() {
        let getMonth = wishlists.map(findMonth => findMonth.month)
        let getYear = wishlists.map(findYear => findYear.year)
        for (let i = 0; i < wishlists.length; i++) {
            if (getMonth[i] === date.getMonth() && getYear[i] === date.getFullYear()) {
                setSaved("Your planned events")
                return filteredEvents.map(artist => <SavedCard details={artist}/>)
            } else {setSaved("You have no saved events this month")
            }
        }
    }
    function incrementMonth() {
        if (date.getMonth() === 11) {
            date.setFullYear(date.getFullYear() + 1)
            date.setMonth(0)
        } else {
            date.setMonth(date.getMonth() + 1)
        }
        setDate(new Date(date.valueOf()))
    }
    function decrementMonth() {
        if (date.getMonth() === 0) {
            date.setFullYear(date.getFullYear() - 1)
            date.setMonth(11)
        } else {
            date.setMonth(date.getMonth() - 1)
        }
        setDate(new Date(date.valueOf()))
    }
    function incrementYear() {

            date.setFullYear(date.getFullYear() + 1)
        setDate(new Date(date.valueOf()))
    }
    function decrementYear() {
        date.setFullYear(date.getFullYear() - 1)
        setDate(new Date(date.valueOf()))
    }

}







