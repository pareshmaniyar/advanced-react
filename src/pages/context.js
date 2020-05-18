import React from 'react';
import ComponentC from "../components/componentC";
export const UserContext = React.createContext();

class ComponentB extends React.Component {
    render(){
        return (
            <div>
                ComponentB
                <ComponentC />
            </div>
        );
    }
}
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
                <ComponentA />
            </UserContext.Provider>
        );
    }
}

export default Parent;