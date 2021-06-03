import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef(( { props }, refs) => {
    return (
        <input placeholder={props} ref={refs} />
    )
});

const SecondChild = forwardRef((_, ref) => {
    const localRef = useRef();
    useImperativeHandle(ref, () => ({
        focusInput: () => localRef.current.focus()
    }));
    return (<input ref={localRef} placeholder="second child" />);
})

function Refs() {
    const parentInputRef = useRef();
    const childInputRef = useRef();
    const secondRef = useRef();

    return (
        <div>
            <h1>Parent</h1>
            <input ref={parentInputRef} />
            <button onClick={() => parentInputRef.current.focus()}>Parent Focus Please!</button>
            <button onClick={() => childInputRef.current.focus()}>Child Focus Please!</button>
            <button onClick={() => secondRef.current.focusInput()}>Other way to Focus on second child!</button>
            <h2>Child</h2>
            <Child ref={childInputRef} props="Passing Child Props" />
            <h2>Second Child</h2>
            <SecondChild ref={secondRef} />
        </div>
    );
}

export default Refs;