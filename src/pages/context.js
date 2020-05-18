import React from 'react';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
import ComponentB from "../components/ComponentB";

class ComponentA extends React.Component {
    render(){
        return (
            <div>
                ComponentA
                <ComponentB />
            </div>
        );
    }
}
const obj = {
    title: "Context",
    description: "Like a Tunnel, saves unnecesary passing through all the middle component trees"
}
class Parent extends React.Component {
    render(){
        return (
            <UserContext.Provider value={obj}>
                <ChannelContext.Provider value={'Channel'}>
                    <ComponentA />
                </ChannelContext.Provider>
            </UserContext.Provider>
        );
    }
}

export default Parent;