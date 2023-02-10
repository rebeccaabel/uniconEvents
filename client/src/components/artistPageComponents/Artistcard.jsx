import ArtistCardDescription from "./ArtistCardDescription.jsx";

export default function ({details}) {
    const {name, image} = details;

    return <div>
        <div className="artist-card" style={{backgroundImage: `url(${image})`}}>
        </div>
        <div className="about-artist-text">
            <h3>{name}</h3>
            <ArtistCardDescription/>
        </div>
    </div>
}
