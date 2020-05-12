import React from 'react';

class LifeCycle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            state: "Initial State",
            currentTime: new Date().getTime(),
            stages: [
                {
                    stage: 'Constructor',
                    date: new Date().getTime()
                },
                {
                    stage: 'Render',
                    date: new Date().getTime()
                }
            ]
        }
        console.log("Constructor");
        this.updateState = this.updateState.bind(this);
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    updateState(text){
        this.setState({state: text});
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate");
        console.log("prevProps: ", prevProps);
        console.log("prevState: ", prevState);
        console.log("snapshot: ", snapshot);
    }
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(props, state) {
        console.log("shouldComponentUpdate");
        if(state.state === "Dummy State"){
            console.log("shouldComponentUpdate would result false and won't change state");
            return false;
        }
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }
    render(){
        console.log("Render");
        return (
            <div>
                <h2>LifeCycle</h2>
                {this.state.stages.map(item => {
                    return <div key={item.stage}>
                        {item.stage}: {item.date}
                        </div>
                })}
                <h3>{this.state.state}</h3>
                <button onClick={() => this.updateState("Updated State")}>Update State</button>
                <div>{this.props.randomProp}</div>
                <button onClick={() => this.updateState("Dummy State")}>Trying to Update State to Dummy value</button><br/>
            </div>
        );
    }
}

export default LifeCycle;
