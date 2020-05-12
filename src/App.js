import React, { Suspense, lazy } from 'react';
import {
    Switch,
    Route,
    HashRouter as Router,
    Link
} from 'react-router-dom';
const LifeCycle = lazy(() => import('./pages/lifecycle'));
const Routes = lazy(() => import('./pages/routes'));
const PropType = lazy(() => import('./pages/proptype'));
const Fragments = lazy(() => import('./pages/fragments'));
const ErrorBoundaries = lazy(() => import('./pages/errorBoundaries'));

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
                    <Link to="/proptype">Prop Type</Link>
                    <Link to="/fragments">Fragments</Link>
                    <Link to="/errorboundaries">Error Boundaries</Link>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route path="/lifecycle">
                                <LifeCycle randomProp="Prop received from App "/>
                            </Route>
                            <Route path="/routes">
                                <Routes/>
                            </Route>
                            <Route path="/proptype">
                                <PropType/>
                            </Route>
                            <Route path="/fragments">
                                <Fragments/>
                            </Route>
                            <Route path="/errorboundaries">
                                <ErrorBoundaries/>
                            </Route>
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        );
    }
}
export default App;
