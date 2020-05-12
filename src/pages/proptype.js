import React from 'react';
import ChildComponent from "../components/childComponents";

class Parent extends React.Component {
    render(){
        let prop = {
            str: "String",
            // func: function() {
            //     return <div>Inside Function</div>
            // },
            i: 97,
            arr: ["a", "b"],
            b: true,
            // obj: {
            //     "key": "value",
            //     "key2": "value2"
            // }
        }
        return (
            <ChildComponent prop={prop}/>
        );
    }
}

export default Parent;