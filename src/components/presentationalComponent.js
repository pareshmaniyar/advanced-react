import React from 'react';
const presentationalComponent = ({localName, localchangeName}) => {
    return (
        <div>
            {localName}
            <button onClick={() => localchangeName("Changed Name")}>Change Name</button>
        </div>
    );
}
export default presentationalComponent;