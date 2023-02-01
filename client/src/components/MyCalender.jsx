import React, {useEffect, useState} from 'react'
import {monthByName} from "./MonthArray.jsx"
import {yearByName} from "./MonthArray.jsx";
import {SaveAnEvent, wishlist, idArray, SavedCard} from "./MySavedEvents.jsx";
import {artists} from "./artistArray.jsx";
import Eventcard from "./Eventcard.jsx";


export default function () {
    const [date, setDate] = useState(new Date(Date.now()))
    const [filteredEvents, setFilteredEvents] = useState(wishlist)

    useEffect(() => {
        setFilteredEvents(wishlist.filter(artist => artist.date.getMonth() === date.getMonth() && artist.date.getFullYear() === date.getFullYear()))
    }, [date])

    // noinspection JSCheckFunctionSignatures
    return <>
        <Calendar/>
        <h4>{date.getFullYear()}</h4>
        <MyEvents/>
    </>

    function MyEvents() {
        return <div className={"my-events"}>
            <h3>{date.toLocaleString("en-GB", {month: "long"})}</h3>
            <h4>Your planned events:</h4>
            <div>
                {filteredEvents.map(details => <SavedCard event={details}/>)}
            </div>
        </div>
    }

    function Calendar() {
        return <div className={"calender"}>
            <select className={"years"} value={date.getFullYear()} onChange={handleChange}>
                <option value={"none"}>Choose</option>
                <option value={"2021"}>2021</option>
                <option value={"2022"}>2022</option>
                <option value={"2023"}>2023</option>
                <option value={"2024"}>2024</option>
                <option value={"2025"}>2025</option>
                <option value={"2026"}>2026</option>
            </select>
            <button className="prev" onClick={decrementMonth}><i className="fa-solid fa-arrow-left"></i></button>
            <button className="next-month" onClick={incrementMonth}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    }

    function handleChange(e) {
        setDate(new Date(date.setFullYear(e.target.value)))
    }

    function incrementMonth() {
        if (date.getMonth() + 1 === 11) {
            date.setFullYear(date.getFullYear() + 1)
            date.setMonth(0)
        } else {
            date.setMonth(date.getMonth() + 1)
        }
        setDate(new Date(date.valueOf()))
    }

    function decrementMonth() {
        if (date.getMonth() - 1 === 0) {
            date.setFullYear(date.getFullYear() - 1)
            date.setMonth(11)
        } else {
            date.setMonth(date.getMonth() - 1)
        }
        setDate(new Date(date.valueOf()))
    }

}
/* Olika kort
 <SavedEventCard/>
            <ShowSavedEvent/>
 */







