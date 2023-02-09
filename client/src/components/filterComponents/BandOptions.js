import { useContext } from "react"
import GlobalContext from "../GlobalContext"

export default function () {
    const { concerts } = useContext(GlobalContext)
    const bandOptions = concerts.map(a => a.name)
    const uniqueBandOptions = bandOptions.filter((c, index) => {
        return bandOptions.indexOf(c) === index
    })
    return uniqueBandOptions
}