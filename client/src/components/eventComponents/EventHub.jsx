import "../../styles/ArtistHub.css"
import DescriptionArtistHub from "./DescriptionEventHub.jsx";
import LocationArtistHub from "./LocationEventHub.jsx";
import PriceArtistHub from "./PriceEventHub.jsx";
import ImageArtistHub from "./ImageEventHub.jsx";
import TitleArtistHub from "./TitleEventHub.jsx";
import GoogleMaps from "../GoogleMaps.jsx";



export default function () {

    return <div className="artist-info-wrapper">
        <TitleArtistHub/>
        <ImageArtistHub/>
        <DescriptionArtistHub/>
        <LocationArtistHub/>
       <PriceArtistHub/>
        <GoogleMaps/>

    </div>
}