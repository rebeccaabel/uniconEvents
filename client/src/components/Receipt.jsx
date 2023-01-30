import {artists} from "../utils/artists-data.js";


export default function () {
    return <div className="card">
        <img src={artists[0].image} alt={'artist-image'}></img>
        <div className={'details'}>
            <p>{artists[0].title}</p>
            <p>{artists[0].location} - avicii arena</p>
            <p>{artists[0].date.toLocaleDateString('sv-SE')}</p>
        </div>
    </div>
}


