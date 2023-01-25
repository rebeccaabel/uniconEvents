import React from 'react'

export default function () {
    return <>
        <div>

            <p className='date'>"Display current month"</p>
            <p className="saved-date">Possible saved events here</p>
            <button className="next-month" onClick={nextMonth}>Click for next month</button>
            <button className="next-month" onClick={prevMonth}>Click for prev month</button>

        </div>


    </>
}
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
export function handleMonth(){
    //todo: Given i am on the profilepage When i click on my calender.
    // Then I can see a scrolldown menu with my saved events for each month

    let savedEvents = "24/1";
    console.log(months)
    let dates = new Date();
    let currentMonth = months[dates.getMonth()];
    console.log(currentMonth)

    if(savedEvents.includes("24/1")){
        console.log(savedEvents)
    }

}
function nextMonth(){
    let dates = new Date();
    let monthIncrement = months[dates.getMonth() + 1];
    console.log(monthIncrement)

}
function prevMonth(){
    let dates = new Date();
    let monthDecrement = months[dates.getMonth() - 1];
    console.log(monthDecrement)
}