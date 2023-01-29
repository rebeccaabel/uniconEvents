import React, {useState} from 'react'
import {monthByName} from "./MonthArray.jsx"
import saveAEvent from "./MySavedEvents.jsx";
import {artists} from "./artistArray.jsx";

export default function () {

    let years = new Date().getFullYear()
    const [year, setYear] = useState(years)
    const [month, setMonth] = useState(0)

    const handleChange = (event) => {
        setYear(event.target.value);
    }

    const displayMonth = () => {
        let today = new Date();
        let getTodayMonth = monthByName[today.getFullYear()]
        setMonth(getTodayMonth) //Not working
        if(next){
            setMonth(month + 1)
        }
    }
    let prev = month > 0;
    let next = month < monthByName.length -1;
    let monthIndex = monthByName[month]
    const displayPrevMonth = () => {
    if(prev) {
        setMonth(month - 1)
    }
    }
    return <>

    <div className={"calender"}>
        <button className="prev" onClick={displayPrevMonth} disabled={!prev}><i className="fa-solid fa-arrow-left"></i></button>
        <select className={"years"} value={year} onChange={handleChange}>
            <option value={"2023"}>2023</option>
            <option value={"2024"}>2024</option>
            <option value={"2025"}>2025</option>
            <option value={"2026"}>2026</option>
            <option value={"2027"}>2027</option>
        </select>
        <button className="next-month" onClick={displayMonth} disabled={!next}><i className="fa-solid fa-arrow-right"></i></button>
        </div>

        <h4>{year}</h4>
        <div className={"my-events"}>

        <h3>{monthIndex.month}</h3>

        </div>

        <h4>Your planned events:</h4>

        //todo: Fix needed: This function call renders the button on the calender page aswell
        <div>{saveAEvent()}</div>
    </>
}





