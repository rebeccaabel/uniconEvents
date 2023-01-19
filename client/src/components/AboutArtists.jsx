import Artistcard from "./Artistcard.jsx";

export default function () {
    const artistInfo = [
        {
        ArtistImage: "https://veryveganrecipes.com/wp-content/uploads/2015/12/how-to-make-vegan-portobello-mushroom-burger-recipe.png",
        Name: "Taylor Swift",
        Age: "Age: 45",
        Genre: "Genre: Rock n Roll",
        },
        {
            ArtistImage: "https://papunet.net/sites/papunet.net/files/kuvapankki/20190425/14_kysymys_0.png",
            Name: "Taylor Swift",
            Age: "Age: 45",
            Genre: "Genre: Rock n Roll",
        },
        {
            ArtistImage: "https://papunet.net/sites/papunet.net/files/kuvapankki/20190425/14_kysymys_0.png",
            Name: "Taylor Swift",
            Age: "Age: 45",
            Genre: "Genre: Rock n Roll",
        },
        {
            ArtistImage: "https://papunet.net/sites/papunet.net/files/kuvapankki/20190425/14_kysymys_0.png",
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