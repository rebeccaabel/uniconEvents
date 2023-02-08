import "../styles/ArtistHub.css"
import DescriptionArtistHub from "./DescriptionArtistHub.jsx";
import LocationArtistHub from "./LocationArtisthub.jsx";
import PriceArtistHub from "./PriceArtistHub.jsx";
import ImageArtistHub from "./ImageArtistHub.jsx";
import TitleArtistHub from "./TitleArtistHub.jsx";
import GoogleMaps from "./GoogleMaps";



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