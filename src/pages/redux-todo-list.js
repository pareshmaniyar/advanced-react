import React from 'react';
import { connect } from 'react-redux';
import { switchOff, switchOn } from '../actions/index';
import ContainerComponents from '../containers/containerComponents'

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({text: event.target.value});
    }
    render(){
        return (
            <div>
                <h2>Redux To Do List</h2>
                {this.props.switch === 'ON'?'Switch is on':'Switch is off'}
                <input type="text" value={this.state.text} onChange={this.handleChange}></input>
                <button onClick={() => this.props.switchOn(this.state.text)}>Switch On</button>
                <button onClick={() => this.props.switchOff(this.state.text)}>Switch Off</button>
                <h4>List:</h4>
                {this.props.list.map(text => <div>{text}</div>)}
                <ContainerComponents title="Practicing Redux"/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        switch: state.todolist.switch,
        list: state.todolist.list
    }
}
const mapDispatchToProps = (dispatch) => ({
    switchOff: text => dispatch(switchOff(text)),
    switchOn: text => dispatch(switchOn(text))
})

export default connect(mapStateToProps, { switchOff, switchOn })(ToDoList);
