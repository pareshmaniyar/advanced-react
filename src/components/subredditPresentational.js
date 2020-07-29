import React from 'react';

function ReduxPresentation({ list, handleChange, handleRefresh, selectedSubreddit }){
    
    return (
        <div className="redux-container">
            Redux Container
            <br/>
            <select onChange={(e) => handleChange(e.target.value)} value={selectedSubreddit}>
                <option value="vue">vue</option>
                <option value="react">react</option>
                <option value="redux">redux</option>
            </select>
            <button onClick={() => handleRefresh(selectedSubreddit)}>Refresh</button>
            <ul>
                {list.map(item => <li key={item.data.id}>{item.data.title}</li>)}
            </ul>
        </div>
    );
}

export default ReduxPresentation;
