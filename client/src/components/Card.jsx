import PopularEvents from "./PopularEvents.jsx";
import Penguin from "./Penguin.png"
export default function ({title, text, image}) {
    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
        <h3>{title}</h3>
        <p>{text}</p>
        </div>
    </>
}