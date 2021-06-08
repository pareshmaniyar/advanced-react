import React from 'react';
import { useParams } from "react-router-dom";
import { PersonDetailsList } from './EmployeeList';
import './persondetails.css';

// Can use lodash for better error handling below to get person details
function EmployeeList () {
    const { id } = useParams();
    const person = PersonDetailsList.filter(member => member.id === id)[0];

    return (
        <div className="personal-details">
            <div className="left-portion">
                <h2>Employees Details</h2>
                <div className="table-row">
                    <div className="row-element">{person.id}</div>
                    <div className="row-element">{person.name}</div>
                    <div className="row-element">{person.email}</div>
                    <div className="row-element">{person.number}</div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;
