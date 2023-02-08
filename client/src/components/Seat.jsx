import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import GlobalContext from "./GlobalContext.jsx";
export default function () {
    let {chosenSeats, setChosenSeats} = useContext(GlobalContext)
    chosenSeats.splice(0, chosenSeats.length)
    let cloneChosenSeats = [...chosenSeats]
    let numberOfSeats = 201;
    let seats = []

    for (let i = 1; i < numberOfSeats; i++) {
        seats.push(ClickBtn(i));
    }
    const checkSeat = () => {
        for (let i = 0; i < seats.length; i++) {
            if (seats[i].props.className === "black-btn") {
                cloneChosenSeats.push(seats[i].props.value);
            }
        }
        setChosenSeats(chosenSeats = cloneChosenSeats)
    }

    function ClickBtn(input) {
        const [active, setActive] = useState(false);
        const handleClick = () => {
            setActive(!active);
        };

        return <button value={input} onClick={() => {
            handleClick()
        }} className={active ? "black-btn" : "white-btn"}>{input}</button>
    }

    return <>
        <div id="seated-area">
            <h4>This is the seated area. Please choose your preferred seats.</h4>
            <div>
                {seats}
            </div>
            <Link to={"/Paymentpage"}>
                <button onClick={() => {checkSeat()}} id="Proceed-Payment-button">Proceed to payment</button>
            </Link>
        </div>
    </>
}
