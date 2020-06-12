import React from 'react';
import { UserContext } from '../pages/context';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

export default function ComponentD() {
    const theme = useContext(UserContext);
    const history = useHistory();
    console.log("useHistory: ", history.location.pathname);
    return (
        <div>
            <h3>Hooks Context</h3>
            <h4>title: {theme.title}</h4>
            <div>{theme.description}</div>
            <div> ComponentD</div>
        </div>
    );
}
