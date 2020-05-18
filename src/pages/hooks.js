import React, { useState, useEffect, useReducer } from 'react';

const initialState = 0;
function reducer(state,action){
    switch(action) {
        case 'i': return state + 1;
        case 'd': return state - 1;
        case 'r': return initialState;
        default: return state;
    }
}
export default function Title() {
    const [title, setTitle] = useState("Initial Title");
    const [count, dispatch] = useReducer(reducer, initialState);
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
            <hr/>
            <div>Count: {count}</div>
            <button onClick={() => dispatch('i')}>Increment</button>
            <button onClick={() => dispatch('d')}>Decrement</button>
            <button onClick={() => dispatch('r')}>Reset</button>
        </div>
    );
}
