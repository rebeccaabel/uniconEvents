import React, { useState } from "react";

export function ClickBtn() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return <div className="testBtn">
        <button onClick={handleClick} className={active ? "black-btn" : "white-btn"}>test</button>
    </div>
}