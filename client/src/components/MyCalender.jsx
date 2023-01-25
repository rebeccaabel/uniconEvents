import React from 'react'

export default function () {
    return <>
        <div>

            <p className='date-class'>"Display current month"</p>
            <p>Possible saved events here</p>
            <button>Click for next month</button>

        </div>


    </>
}
export function handleMonth(){
    //todo: Given i am on the profilepage When i click on my calender.
    // Then I can see a scrolldown menu with my saved events for each month
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let savedEvents = "24/1";
    console.log(months)
    const dates = new Date();
    let currentMonth = months[dates.getMonth()];
    console.log(currentMonth)
    console.log(savedEvents)
}