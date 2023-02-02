import Searchbar from "../components/Searchbar.jsx";
import PopularEvents from "../components/PopularEvents.jsx";
import MostRecentEvents from "../components/mostRecentEvents.jsx";
import TodayEvents from "../components/todayEvents.jsx";
import Tidbits from "../components/Tidbits.jsx";


export default function () {
    return <>
        <TodayEvents/>
        <PopularEvents/>
        <MostRecentEvents/>
        <Tidbits/>
    </>

}
