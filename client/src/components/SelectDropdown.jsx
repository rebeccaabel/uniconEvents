import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {useRef} from "react"

export default function () {
    const getInitialState = () => {
        const value = 0;
        console.log(value);
        return value;
    }
    const [value, setMyValue] = useState(getInitialState);

    const handleChange = (event) => {
        console.log(setMyValue(event.target.value));
    }
    return  <>
        <label>Choose number of tickets</label>
        <select value={value} onChange={handleChange}>
            <option value="0" id="number0">0</option>
            <option value="1" id="number1">1</option>
            <option value="2" id="number2">2</option>
            <option value="3" id="number3">3</option>
            <option value="4" id="number4">4</option>
        </select>
    </>
}