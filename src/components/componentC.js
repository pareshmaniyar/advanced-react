import React from 'react';
import { UserContext } from '../pages/context';

class ComponentC extends React.Component {
    // contextMethod()
    render(){
        return (
            <div>
                <UserContext.Consumer>
                    {(obj) => {
                        return <div>
                                <h4>{obj.title}</h4>
                                <div>{obj.description}</div>
                            </div>
                    }}
                </UserContext.Consumer>
                    <div> ComponentC</div>
            </div>
        );
    }
}
export default ComponentC;
