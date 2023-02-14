import { useContext } from "react"
import GlobalContext from "../GlobalContext"

export default function (selectedVenue) {
    const { concerts } = useContext(GlobalContext)
    if (selectedVenue) {
        let bandOptions = concerts.filter(band => band.venue == selectedVenue)
        bandOptions = bandOptions.map(a => a.name)
        const uniqueBandOptions = bandOptions.filter((c, index) => {
            return bandOptions.indexOf(c) === index})
        console.log(bandOptions)
        return uniqueBandOptions
    }

    const bandOptions = concerts.map(a => a.name)
    const uniqueBandOptions = bandOptions.filter((c, index) => {
        return bandOptions.indexOf(c) === index
    })
    return uniqueBandOptions
}