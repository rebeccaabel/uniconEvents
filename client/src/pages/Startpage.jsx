import Searchbar from "../components/Searchbar.jsx";
import PopularEvents from "../components/PopularEvents.jsx";
import MostRecentEvents from "../components/mostRecentEvents.jsx";
import TodayEvents from "../components/todayEvents.jsx";


export default function () {
    return <>
        <Searchbar/>
        <TodayEvents/>
        <PopularEvents/>
        <MostRecentEvents/>

    </>

}
