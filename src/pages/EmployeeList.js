import React from 'react';
import { useHistory } from "react-router-dom";
import './persondetails.css';

//For CSS, I usually use styled components

// below can go into constats folder
export const PersonDetailsList = [
    {
        id: '12443',
        name: 'John',
        email: 'john@example.com',
        number: "9875982923"
    },
    {
        id: '432423',
        name: 'Kasfsaf',
        email: 'afasf@example.com',
        number: "232323923"
    },
    {
        id: '756765',
        name: 'Paresh',
        email: 'presh@example.com',
        number: "9128782839"
    }
];

function EmployeeList () {
    const history = useHistory();

    function handleClick(id) {
        history.push(`/employee-details/${id}`);
    }

    return (
        <div className="personal-details">
            <div className="left-portion">
                <h2>Employees List</h2>
                {PersonDetailsList.map(person => (
                    <div
                        key={person.id}
                        onClick={() => handleClick(person.id)}
                        className="table-row"
                    >
                        <div className="row-element">{person.id}</div>
                        <div className="row-element">{person.name}</div>
                        <div className="row-element">{person.email}</div>
                        <div className="row-element">{person.number}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EmployeeList;
