import React, {useState} from 'react'
import {artists} from "./artistArray.jsx";

export default function () {
    const [variousMonths, setMonths] = useState([handleMonth()]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
    const [prevMonth, setPrevMonth] = useState(new Date().getMonth())
    let displayNextMonth = () => {
        if (currentMonth < 11) {
            setCurrentMonth(currentMonth + 1);
        } else {
            setCurrentMonth(0);
        }

    }
    let displayPrevMonth = () => {
           setPrevMonth(prevMonth - 1)
    }
    return <>
        <div>

            <p className={"month"}>{variousMonths}</p>
            <p>{`Current Month: ${currentMonth}`}</p>
            <p>{`Previous Month: ${prevMonth}`}</p>
            <button className="prev" onClick={() => setPrevMonth(displayPrevMonth)}>Click for previous month</button>
            <button className="next-month" onClick={() => setCurrentMonth(displayNextMonth)}>Click for next month</button>

            <p className="saved-date">Possible saved events here</p>
        </div>


    </>
}

export function handleMonth(){
    //todo: Given i am on the profilepage When i click on my calender.
    // Then I can see a scrolldown menu with my saved events for each month
    let dates = new Date().getMonth()

}
/*
let currentIndex = 0;
const months = [
    {
        month: "January"
    },
    {
        month: "February"
    },
    {
        month: "March"
    },
    {
        month: "April"
    },
    {
        month: "May"
    },
    {
        month: "June"
    },
    {
        month: "July"
    },
    {
        month: "August"
    },
    {
        month: "September"
    },
    {
        month: "October"
    },
    {
        month: "November"
    },  {
        month: "December"
    }
] */

