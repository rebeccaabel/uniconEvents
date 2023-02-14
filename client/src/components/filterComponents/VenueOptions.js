import { useContext } from "react"
import GlobalContext from "../GlobalContext"

export default function (selectedBand){
    const { concerts } = useContext(GlobalContext)
    if (selectedBand) {
        let venueOptions = concerts.filter(band => band.name == selectedBand)
        venueOptions = venueOptions.map(a => a.venue)
        const uniqueVenueOptions = venueOptions.filter((c, index) => {
            return venueOptions.indexOf(c) === index})
        
        return uniqueVenueOptions
    }
    const venueOptions = concerts.map(a => a.venue)
    const uniqueVenueOptions = venueOptions.filter((c, index) => {
        return venueOptions.indexOf(c) === index
    })
    return uniqueVenueOptions
}