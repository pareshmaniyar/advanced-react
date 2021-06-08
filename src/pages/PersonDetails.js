import React, { useState } from 'react';
import './persondetails.css';
//For CSS, I usually use styled components

// below can go into constats folder
const PersonDetailsList = [
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

function PersonDetails () {
    const [personList, setPersonlist] = useState(PersonDetailsList);
    const [personDetails, setPersonDetails] = useState(null);

    function saveDetails() {
        setPersonList([
            ...personList.filter(person => person.id !== personDetails.id),
            personDetails
        ]);
    }
    return (
        <div className="personal-details">
            <div className="left-portion">
                <h2>Employees Details</h2>
                {personList.map(person => (
                    <div
                        key={person.id}
                        onClick={() => setPersonDetails(person)}
                        className={`${(personDetails && personDetails.id) === person.id?'selected': ""} table-row`}
                    >
                        <div className="row-element">{person.id}</div>
                        <div className="row-element">{person.name}</div>
                        <div className="row-element">{person.email}</div>
                        <div className="row-element">{person.number}</div>
                    </div>
                ))}
            </div>
            {personDetails && (
                <div className="right-portion">
                    <div>name: </div>
                    <input 
                        type="text" 
                        value={personDetails.name}
                        onChange={(e) => setPersonDetails({
                            ...personDetails,
                            name: e.target.value
                        })}/>
                    <div>email: </div>
                    <input type="text" value={personDetails.email} />
                    <div>number: </div>
                    <input type="text" value={personDetails.number} />
                    <button onClick={saveDetails}>Save</button>
                </div>
            )}
        </div>
    )
}

export default PersonDetails;
