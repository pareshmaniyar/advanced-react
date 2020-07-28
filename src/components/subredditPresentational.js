import React from 'react';

function ReduxPresentation({ list, handleChange, handleRefresh }){
    
    return (
        <div className="redux-container">
            Redux Container
            <br/>
            <select onChange={handleChange}>
                <option value="react">react</option>
                <option value="vue">vue</option>
                <option value="redux">redux</option>
            </select>
            <button onClick={handleRefresh}>Refresh</button>
            <ul>
                {list.map(item => <li>{item}</li>)}
            </ul>
        </div>
    );
}

export default ReduxPresentation;
