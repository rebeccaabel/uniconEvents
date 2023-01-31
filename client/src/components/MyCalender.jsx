import React, {useState} from 'react'
import {monthByName} from "./MonthArray.jsx"
import {yearByName} from "./MonthArray.jsx";
import {SaveAnEvent} from "./MySavedEvents.jsx";
import {artists} from "./artistArray.jsx";
import Eventcard from "./Eventcard.jsx";



export default function () {
    let months = new Date().getMonth()
    const [year, setYear] = useState(2)
    let [month, setMonth] = useState(months)

    const handleChange = (e) => {
       setYear(e.target.value);

    }
    const displayMonth = () => {
        setMonth(month + 1)
        if(month === 11) {

            setYear(year +1)
            setMonth(month = 0)
        }

    }

    let monthIndex = monthByName[month]
    let yearIndex = yearByName[year]
    const displayPrevMonth = () => {
        setMonth(month - 1)
        if(month < 1) {
            setYear(year -1)
            setMonth(month = 10)
        }
    }


  function Trying(id){
      SaveAnEvent(id)
        console.log(SaveAnEvent(id)) //Returns undefined
        for (let i = 0; i<artists.length; i++) {
            if(artists[i].wishList = true && artists[0].date.getMonth() === month) {
                return  artists.map(savedEvent => <Eventcard title={savedEvent.title} date={savedEvent.date.toLocaleString()} image={savedEvent.image} />)
            }
        }
    }

    return <>

        <div className={"calender"}>
            <select className={"years"} value={year} onChange={handleChange}>
                <option value={"none"}>Choose</option>
                <option value={"2021"}>{yearIndex.currentYear.toLocaleString()}</option>
                <option value={"2022"}>{yearIndex.currentYear.toLocaleString()}</option>
                <option value={"2023"}>{yearIndex.currentYear.toLocaleString()}</option>
                <option value={"2024"}>{yearIndex.currentYear.toLocaleString()}</option>
                <option value={"2025"}>{yearIndex.currentYear.toLocaleString()}</option>
                <option value={"2026"}>{yearIndex.currentYear.toLocaleString()}</option>
            </select>
            <button className="prev" onClick={displayPrevMonth}><i className="fa-solid fa-arrow-left"></i></button>
            <button className="next-month" onClick={displayMonth}><i className="fa-solid fa-arrow-right"></i></button>
        </div>

        <h4>{yearIndex.currentYear.toLocaleString()}</h4>

        <div className={"my-events"}>

        <h3>{monthIndex.month.toLocaleString("en-US", {month:"long"})}</h3>

        </div>

        <h4>Your planned events:</h4>
        <div>
            <SaveAnEvent/>
            <Trying/>
        </div>

    </>

}
/* Olika kort
 <SavedEventCard/>
            <ShowSavedEvent/>
 */







