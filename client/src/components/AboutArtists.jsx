import Artistcard from "./Artistcard.jsx";

export default function () {
    const artistInfo = [
        {
        ArtistImage: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        Name: "Taylor Swift",
        Age: "Age: 45",
        Genre: "Genre: Rock n Roll",
        },
        {
            ArtistImage: "https://images.unsplash.com/photo-1527735095040-147bffb4cede?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            Name: "Taylor Swift",
            Age: "Age: 45",
            Genre: "Genre: Rock n Roll",
        },
        {
            ArtistImage: "https://images.unsplash.com/photo-1505282722405-413748d3de7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            Name: "Taylor Swift",
            Age: "Age: 45",
            Genre: "Genre: Rock n Roll",
        },
        {
            ArtistImage: "https://images.unsplash.com/photo-1571310100246-e0676f359b42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNpbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            Name: "Taylor Swift",
            Age: "Age: 45",
            Genre: "Genre: Rock n Roll",
        },
    ]
    return <div className="card-area-wrapper">
            <h2>About Artists</h2>
            <div className="card-area">
                {
                    artistInfo.map(artistInformation => <Artistcard  Name={artistInformation.Name} Age={artistInformation.Age} Genre={artistInformation.Genre} ArtistImage={artistInformation.ArtistImage} />)
                }
            </div>
        </div>


}