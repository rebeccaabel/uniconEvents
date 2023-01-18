import aboutArtists from "./AboutArtists.jsx";
export default function ({ArtistImage,Name,Age,Genre}) {
    console.log(Age)
    return <div>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${ArtistImage})`}}>
            <h3>{Name}</h3>
            <p>{Age}</p>
            <p>{Genre}</p>

        </div>
    </div>

}