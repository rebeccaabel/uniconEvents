import PopularEvents from "./PopularEvents.jsx";

export default function ({title, text, image}) {
    console.log(title)
    return <div>
        <img src={image} alt="artist image"/>
        <h3>{title}</h3>
        <p>{text}</p>

    </div>
}