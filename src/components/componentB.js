import React, { useContext, useRef } from 'react';
import { UserContext, ChannelContext } from '../pages/context';
import ComponentC from "./componentD";

function Child({ setRef }) {
    let inputRef = useRef();
    useEffect(() => {
        setRef(inputRef);
    }, [])
    return (
        <div>
            Child
            <input type="text" ref={inputRef}/>
        </div>
    );
}

function Parent() {
    let ref = "";
    function onClick(){
        console.log("Parent clicked", ref.target.value);
    }
    function setRef(value) {
        ref = value;
    }
    return (
        <div>
            Parent
            <Child setRef={setRef}/>
            <button onClick={() => onClick()}>Click</button>
        </div>
    );
}

export default function ComponentB () {
    let user = useContext(UserContext);
    let channel = useContext(ChannelContext);
    return (
        <div>
            ComponentB: {user.title} {channel}
            <ComponentC />
        </div>
    );
}
