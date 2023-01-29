import {artists} from "./artistArray.jsx";
import saveAEvent from "./MySavedEvents.jsx";
import MySavedEvents from "./MySavedEvents.jsx";
export default function ({title, text, image}) {
    return <>
        <div className="card"  alt='artist picture' style={{backgroundImage:`url(${image})`}}>
        <h3>{title}</h3>
        <p>{text}</p>

            <MySavedEvents/>

        </div>
    </>
}




