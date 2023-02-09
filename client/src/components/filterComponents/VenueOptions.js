import { useContext } from "react"
import GlobalContext from "../GlobalContext"

export default function (){
    const { concerts } = useContext(GlobalContext)
    const venueOptions = concerts.map(a => a.venue)
    const uniqueVenueOptions = venueOptions.filter((c, index) => {
        return venueOptions.indexOf(c) === index
    })
    return uniqueVenueOptions
}