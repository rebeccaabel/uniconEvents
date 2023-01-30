import React, {useState} from 'react'
import {monthByName} from "./MonthArray.jsx"
import {yearByName} from "./MonthArray.jsx";


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

    if(yearIndex.currentYear < yearIndex.currentYear[0]){
        console.log("test")
    }
        if(month < 1) {
            setYear(year -1)
            setMonth(month = 10)
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



    </>
}
console.log(yearByName[1].currentYear)





