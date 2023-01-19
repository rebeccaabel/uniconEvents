
let todayButtonActive = false;
export default function () {



    function testClick() {
        alert("hello")
    }

    function filterClick() {
        if(!todayButtonActive) {
            todayButtonActive = true;
        }
        else {todayButtonActive = false }
        let todayButton = document.getElementById("today");
        console.log(todayButtonActive)
        if (todayButton.textContent == "Today") {

        }

        /*
        if (todayButtonActive == "true") {
            todayButtonActive = false;
        }

        else if (todayButtonActive == "false") {
            todayButtonActive = true;
        }
        alert(todayButtonActive)*/
    }




    return <>
        <h1>Filter by date</h1>
        <div className="filter-container-wrapper">
            <div className="filter-container">
                <div className="filter-buttons-dates">
                    <button id="today" onClick={filterClick}
                            style={{backgroundColor: todayButtonActive ? "black" : "white"}}>Today
                    </button>
                    <button>Tomorrow</button>
                    <button>This Week</button>
                    <button>This Month</button>
                    <button>This Year</button>
                    <button>Next Year</button>
                    <button id="recent-added-events">Recently added events</button>
                </div>
                <div className="filter-buttons-cities">
                    <button>Malmö</button>
                    <button>Stockholm</button>
                    <button>Göteborg</button>
                    <button>Borås</button>
                    <button>Skövde</button>
                </div>

                <div className="calender-container">

                    <form className="date-form"><p>Please input start date</p><input type="text"
                                                                                     placeholder="yyyy/mm/dd"/></form>
                    <form className="date-form"><p>Please input end date</p><input type="text"
                                                                                   placeholder="yyyy/mm/dd"/></form>

                </div>
                <div className="calender-container">
                    <button onClick={testClick}>Search</button>
                </div>


            </div>
        </div>
    </>
}