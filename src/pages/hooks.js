import React, { useState, useEffect } from 'react';

export default function Title() {
    const [title, setTitle] = useState("Initial Title");
    function clickHandler(event) {
        if(event.key == "Enter" && event.target.value != "") {
            setTitle(event.target.value);
            event.target.value = "";
        }
    }
    function appendTitle(event){
        event.persist();
        let append = event.target.value;
        if(event.key == "Enter" && append != "") {
            setTitle((prev) => prev + append);
            event.target.value = "";
        }
    }
    useEffect(() => {
        document.title = title;
    });
    useEffect(() => {
        console.log("Executes only Once on initial render");
        return () => { 
            console.log("Executes only when unmounted");
        }
    }, []);
    return (
        <div>
            <h2>Hooks</h2>
            <h3>{title}</h3>
            <input placeholder="Set Title" onKeyDown={clickHandler} type="text"></input>
            <input placeholder="Append Title" onKeyDown={appendTitle} type="text"></input>
        </div>
    );
}
