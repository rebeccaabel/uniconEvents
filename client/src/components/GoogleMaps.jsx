import "../styles/GoogleMaps.css";

let location = "sjöbo";

export default function () {
    return <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFTOXrCK1OfYXLRLXdCK70_U9w5rlqXEY&q=${location}`}></iframe>

}