import React from 'react';
import LifeCycle from './pages/lifecycle'
import {
    Switch,
    Route,
    HashRouter as Router,
    Link
} from 'react-router-dom';
import Routes from './pages/routes'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <h1>My first Demo App!</h1>
                <Router>
                    <Link to="/lifecycle">LifeCycle</Link>
                    <Link to="/routes">Routes</Link>
                    <Switch>
                        <Route path="/lifecycle">
                            <LifeCycle randomProp="Prop received from App "/>
                        </Route>
                        <Route path="/routes">
                            <Routes/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default App;
