import React, {useState} from 'react'
import AboutArtists from "./AboutArtists.jsx";
import {monthByName} from "./MonthArray.jsx"
import {artists} from "./artistArray.jsx"

export default function () {
    const [month, setMonth] = useState(0)

    let prev = month > 0;
    let next = month < monthByName.length -1;

    const displaymonth = () => {
        let today = new Date();
        let getTodayMonth = monthByName[today.getFullYear()]
        setMonth(getTodayMonth) //Not working
        if(next){
            setMonth(month + 1)
        }

    }
    let monthIndex = monthByName[month]
    const displayPrevMonth = () => {

    if(prev) {
        setMonth(month - 1)
    }
        /*previousMonths.setMonth(previousMonths.getMonth() - 1)
        setPrevMonth(previousMonths.toLocaleString('default', { month: 'long' }))*/
    }
    console.log(artists[0].date.getMonth().toLocaleString('default', { month: 'long' })) //Returns 5 (June).
    const SavedEvent = () => {
        let newDate = new Date();
        for (let i = 0; i<monthByName.length; i++) {
            if(monthByName[5].getMonth === artists[0].date.getMonth().toLocaleString('default', { month: 'long' })){
                console.log("found event")
                return  <AboutArtists/>
            }
        }

    }

    return <>

    <div className={"calender-container"}>
        <select>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
        </select>
        <button className="prev" onClick={displayPrevMonth} disabled={!prev}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next-month" onClick={displaymonth} disabled={!next}><i className="fa-solid fa-arrow-right"></i></button>
        </div>

        <div className={"my-events"}>

        <h3>{monthIndex.month}</h3>

        </div>
        <h4>Your planned events:</h4>
        <SavedEvent/>



    </>
}





