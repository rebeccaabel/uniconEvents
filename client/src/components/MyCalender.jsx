import React, {useContext, useEffect, useState} from 'react'
import Eventcard from "./Eventcard.jsx"
import GlobalContext from "./GlobalContext.jsx";
import SavedCard from "./SavedCard.jsx";

export default function () {
    const {wishlists} = useContext(GlobalContext)
    const [date, setDate] = useState(new Date(Date.now()))
    const [filteredEvents, setFilteredEvents] = useState(wishlists)

    useEffect(() => {
        setFilteredEvents(wishlists)

    }, [])


    return <>
        <Calendar/>
        <MyEvents/>
    </>

    function MyEvents() {
        return <div className={"my-events"}>
            <h3>{date.toLocaleString("en-GB", {month: "long"})}</h3>
            <h4>{date.getFullYear()}</h4>
            <h4>Your planned events:</h4>
            <div className={"saved-card"}>
                <PrintArtist/>
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

    function PrintArtist(){
     
        let getMonth = wishlists.map(findMonth => findMonth.month)
        let getYear = wishlists.map(findYear => findYear.year)
        for(let i = 0; i<wishlists.length; i++) {
            if (getMonth[i] === date.getMonth() && getYear[i] === date.getFullYear()) {
                return filteredEvents.map(artist => <SavedCard datum={artist.datum.toString()} image={artist.image} name={artist.name} location={artist.venue}/>)
            }
        }
    }
    function handleChange(e) {
        setDate(new Date(date.setFullYear(e.target.value)))
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

}







