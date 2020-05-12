import React from 'react';
import LifeCycle from './pages/lifecycle'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLifecycle: true
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(){
        this.setState(state => ({showLifecycle: !state.showLifecycle}))
    }
    render(){
        return (
            <div>
                <h1>My first Demo App!</h1>
                <button onClick={this.updateState}>Toggle LifeCycle</button>
                {this.state.showLifecycle? <LifeCycle randomProp="Prop received from App "/>:null}
            </div>
        );
    }
}
export default App;
