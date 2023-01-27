import React, {useState} from 'react'
import AboutArtists from "./AboutArtists.jsx";
import {monthByName} from "./MonthArray.jsx"
import {artists} from "./artistArray.jsx"

export default function () {
    let years = new Date().getFullYear()
    const [year, setYear] = useState(years)
    const [month, setMonth] = useState(0)

    const handleChange = () => {
        setYear(event.target.value);
    }


    const displaymonth = () => {
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
        //todo: Fråga Manuel varför denna inte funkar >:(
        /*previousMonths.setMonth(previousMonths.getMonth() - 1)
        setPrevMonth(previousMonths.toLocaleString('default', { month: 'long' }))*/
    }

    const SavedEvent = () => {
        for (let i = 0; i<artists.length; i++){
            if(artists[i].wishList === true && artists[i].date === artists[i].date){ //Needs to be matched with current month
                return  <AboutArtists/>
            }
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
        <button className="next-month" onClick={displaymonth} disabled={!next}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <h4>{year}</h4>
        <div className={"my-events"}>

        <h3>{monthIndex.month}</h3>


        </div>
        <h4>Your planned events:</h4>
        <SavedEvent/>



    </>
}





