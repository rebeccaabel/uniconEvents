import "../styles/ArtistHub.css"
import DescriptionArtistHub from "./DescriptionArtistHub.jsx";
import LocationArtistHub from "./LocationArtisthub.jsx";
import PriceArtistHub from "./PriceArtistHub.jsx";
import ImageArtistHub from "./ImageArtistHub.jsx";
import TitleArtistHub from "./TitleArtistHub.jsx";



export default function () {

    return <div className="artist-info-wrapper">
        <TitleArtistHub/>
        <ImageArtistHub/>
        <DescriptionArtistHub/>
        <LocationArtistHub/>
       <PriceArtistHub/>
        <div className="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8149.252604773845!2d18.07185034916066!3d59.29432706325974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7826c8abcc0f%3A0x1d7a9835ba7d7f96!2sAvicii%20Arena!5e0!3m2!1ssv!2sse!4v1675177064352!5m2!1ssv!2sse" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
}