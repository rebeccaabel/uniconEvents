import "../styles/GoogleMaps.css";


export default function (location) {
    return <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFTOXrCK1OfYXLRLXdCK70_U9w5rlqXEY&q=${location}`}></iframe>

}