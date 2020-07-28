import React from 'react';
import PresentationalComponents from '../components/subredditPresentational';

function ReduxPresentation(){
    let list = ["a", "b", "c", "d", "e", "f"];
    function handleChange(e){
        console.log(e.target.value);
    }
    function handleRefresh(e){
        console.log(e);
    }
    
    return (
        <PresentationalComponents
            handleChange={handleChange}
            handleRefresh={handleRefresh}
            list={list}
        />
    );
}

export default ReduxPresentation;
