import React from 'react';

class ErrorBoundaries extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isError: false,
            errorMessage: "",
            errorInfo: ""
        }
    }
    componentDidCatch(error, errorInfo){
        this.setState({
            isError: true,
            errorMessage: error
        })
    }
    render(){
        if(this.state.isError) {
            return (<div>
                <div>Something went wrong!</div>
                <div>{this.state.errorMessage.toString()}</div>
            </div>)
        }
        return this.props.children;
    }
}

class BuggyCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
        this.throwCustomError = this.throwCustomError.bind(this);
    }
    throwCustomError() {
        this.setState({isError: true});
        //throw new Error("Won't catch this Error Message in Boundary")
    }
    render(){
        if(this.state.isError){
            throw new Error("Custom Error Message");
        }
        return (
            <div>
                <button onClick={this.throwCustomError}>Throw Error</button>
            </div>
        );
    }
}

class ErrorDemo extends React.Component {
    render(){
        return (
            <div>
                <h3>Error Boundaries</h3>
                <ErrorBoundaries>
                    <BuggyCode/>
                    <BuggyCode/>
                </ErrorBoundaries>
                <ErrorBoundaries>
                    <BuggyCode/>
                </ErrorBoundaries>
                <ErrorBoundaries>
                    <BuggyCode/>
                </ErrorBoundaries>
            </div>
        )
    }
}

export default ErrorDemo;