import React, { useState, memo, useMemo, useCallback } from 'react';

function Memoization() {
    const [render, renderAgain] = useState(0);
    const [obj, _] = useState({ count: 0 });
    const [childProp, changeChildProp] = useState("a");
    function expensiveOperation(count) {
        for(let i = 0; i < 1000000000; i++) {}
        console.log("expensiveOperation");
        return count;
    }
    const memoizedExpensiveOperation = useMemo(
        () => expensiveOperation(render),
        [childProp]
    );
    const handleClick = () => {};
    const callBackSingleReference = useCallback(handleClick, []);
    obj.count++;
    return (
        <div>
            <h3>Memo</h3>
            Number of renders: {obj.count}
            <button onClick={() => renderAgain(render + 1)}>Render</button>
            <button onClick={() => changeChildProp(childProp + "a")}>
                Change Child Prop
            </button>
            <Child count={childProp} handleClick={callBackSingleReference} />
            <hr/>
            Memoization: useMemo<br/>
            {memoizedExpensiveOperation}<br/>
            useCallback: <br/>
        </div>
    );
}

const Child = memo(({ count, handleClick }) => {
    console.log(count, handleClick);
    const [obj, _] = useState({ count: 0 });
    obj.count++;
    return (
        <div>
            <h2 onClick={handleClick}>Child: </h2>
            Child Prop: {count}
            <br/>
            Number of renders: {obj.count}
        </div>
    )
});

export default Memoization;