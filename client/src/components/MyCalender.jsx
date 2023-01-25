import React, {useState} from 'react'

export default function () {
    const [variousMonths, setMonths] = useState([handleMonth()]);
    let displayNextMonth = () => {
        setMonths(() => ["Next is" + nextMonth()])
    }
    let displayPrevMonth = () => {
        setMonths(() => ["Prev is" + prevMonth()])
    }
    return <>
        <div>

            <p className={"month"}>{variousMonths}</p>
            <button className="prev" onClick={() => setMonths(displayPrevMonth)}>Click for previous month</button>
            <button className="next-month" onClick={() => setMonths(displayNextMonth)}>Click for next month</button>
            <p className="saved-date">Possible saved events here</p>


        </div>


    </>
}
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export function handleMonth(){
    //todo: Given i am on the profilepage When i click on my calender.
    // Then I can see a scrolldown menu with my saved events for each month

    let savedEvents = "24/1";
    let dates = new Date();
    let currentMonth = months[dates.getMonth()];
    console.log(currentMonth)

    if(savedEvents.includes("24/1")){
        console.log(savedEvents)
    }

    return currentMonth;
}
function nextMonth(){
    let dates = new Date();
    let monthIncrement = months[dates.getMonth() + 1];
    return monthIncrement;

}
function prevMonth(){
    let dates = new Date();
    let monthDecrement = months[dates.getMonth() - 1];
    return monthDecrement;
}