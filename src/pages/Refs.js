import React, { useRef } from 'react';

const Child = React.forwardRef(( { props }, refs) => {
    return (
        <input placeholder={props} ref={refs} />
    )
});

function Refs() {
    const parentInputRef = useRef();
    const childInputRef = useRef();
    return (
        <div>
            <h1>Parent</h1>
            <input ref={parentInputRef} />
            <button onClick={() => parentInputRef.current.focus()}>Parent Focus Please!</button>
            <button onClick={() => childInputRef.current.focus()}>Child Focus Please!</button>
            <button onClick={() => childInputRef.current.focus()}>Other way to Focus!</button>
            <h2>Child</h2>
            <Child ref={childInputRef} props="Passing Child Props" />
        </div>
    );
}

export default Refs;