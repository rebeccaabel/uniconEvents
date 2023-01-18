export default function () {
    return <>
        <h1>Filter by date</h1>

        <div className="filter-container-wrapper">
            <div className="filter-container">


                <div className="filter-buttons">

                    <button>Today</button>
                    <button>Tomorrow</button>
                    <button>This Week</button>
                    <button>This Month</button>
                    <button>This Year</button>
                    <button>Next Year</button>
                    <button id="recent-added-events">Recently added events</button>

                </div>

                <div className="calender-container">

                    <form className="date-form"><p>Please input start date</p><input type="text" placeholder="yyyy/mm/dd"/></form>
                    <form className="date-form"><p>Please input end date</p><input type="text" placeholder="yyyy/mm/dd"/></form>

                </div>
                <div className="calender-container">
                    <button>Search</button>
                </div>


            </div>
        </div>
    </>
}