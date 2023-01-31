import "../ArtistHub.css"
import { artists } from "./artistArray.jsx";
import { Link } from "react-router-dom";


export default function () {

    let month = artists[0].date.toLocaleString('en-US', { month: 'long' });
    let day = artists[0].date.toLocaleString('en-US', { day: '2-digit' });
    let fullYear = artists[0].date.getFullYear();

    return <div className="artist-info-wrapper">

        <div>
            <h1 id="title">{artists[0].title}</h1>
        </div>

        <div className="artist-image">
            <img src={artists[0].image}/>
        </div>

        <div className="description">
            <h1>Description</h1>
            <p>Here is where some information about the event are present.
                Here we can read in more detail what the event is all about...
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, dolor explicabo excepturi numquam earum et cumque, vel omnis facilis similique quos laudantium incidunt consectetur hic maxime porro aperiam corrupti non?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas voluptate assumenda esse. Asperiores rem quam maiores error vitae sequi ipsa, ex reiciendis itaque expedita aut, minima unde commodi adipisci?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium, temporibus quasi facere blanditiis possimus nostrum, a voluptates provident earum modi similique expedita vitae tenetur praesentium perspiciatis tempora officiis nulla!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur ratione magnam praesentium dolorum id, dignissimos aperiam voluptates vitae cumque amet at corporis, aliquam voluptas fugit laboriosam ducimus provident nemo impedit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, quia corporis quaerat qui eveniet optio, nulla quae cumque laborum nesciunt itaque fugiat nobis porro voluptas quas dolores accusamus quidem repudiandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facilis sint sed laboriosam suscipit quis dolore fuga ratione cumque, laudantium corporis iure neque. Excepturi porro fuga, molestias sint libero facere!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam minima voluptatum perspiciatis velit blanditiis explicabo molestias porro veritatis dolor similique, perferendis repellat tenetur saepe amet inventore quae eligendi laboriosam quia.
                </p>
            </p>
        </div>

        <div className="artist-list">
            <h1>Artists Present</h1>
        </div>

        <div className="location">
            <h1>Date: {fullYear}{month}{day}</h1>
            <h1>Location: {artists[0].location}</h1>
        </div>

        <div className="ticket">
            <h1>Tickets Remaining: {artists[0].availableSeats} / {artists[0].totalSeats}</h1>
            <h1>Price</h1>
            <Link to={'/Paymentpage'}><button> Buy Ticket/s </button></Link>
        </div>

    </div>

}