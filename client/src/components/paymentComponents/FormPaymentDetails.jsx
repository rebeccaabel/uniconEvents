import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function () {
    const [name, setName] = useState("")
    const [cardDigits, setCardDigits] = useState("")
    const [expDate, setExpDate] = useState("")
    const [cvc, setCvc] = useState("")
    const nav = useNavigate()

    const emptyFields = () => {
        if (!name || !cardDigits || !expDate || !cvc) {
            return alert('Card Information cannot be empty!');
        }
        nav("/verification")
    }

    return <form className="date-form" onSubmit={emptyFields}>
            <label>Name on Card</label>
            <input value={name}
                   onChange={event => setName(event.target.value)}
                   type="text"
                   placeholder="Input name here"
            />

            <label>Card digits</label>
            <input onChange={event => setCardDigits(event.target.value)}
                   type="text"
                   placeholder="Enter card number"
                   value={cardDigits}/>

            <label>Expiration date</label>
            <input
                onChange={event => setExpDate(event.target.value)}
                type="text"
                placeholder="mm/yy"
                value={expDate}/>

            <label>CVC</label>
            <input
                onChange={event => setCvc(event.target.value)}
                type="text"
                placeholder="123"
                value={cvc}
            />

            <input id="inputbtn" type='submit' name='submit' value='Purchase'/>
        </form>
}

