import React, { useState } from 'react';

export default function Title() {
    const [title, setTitle] = useState("Initial Title");
    function clickHandler(event) {
        if(event.key == "Enter" && event.target.value != "") {
            setTitle(event.target.value);
        }
    }
    return (
        <div>
            <h2>Hooks</h2>
            <h3>{title}</h3>
            <input onKeyDown={clickHandler} type="text"></input>
        </div>
    );
}