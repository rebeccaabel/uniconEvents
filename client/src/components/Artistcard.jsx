import Button from "../components/ButtonToSectionPage.jsx";

export default function ({ArtistImage,Name,Age,Genre}) {
    return <div>
        <div className="artist-card"  alt='artist picture' style={{backgroundImage:`url(${ArtistImage})`}}>

        </div>
        <div className="about-artist-text">
            <h3>{Name}</h3>
            <p>{Age}</p>
            <p>{Genre}</p>

            <details className="artist-details">
                <summary>Read more</summary>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."</p>
            </details>
            
            <Button/>

        </div>

    </div>

}