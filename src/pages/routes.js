import React from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink,
    useRouteMatch
} from 'react-router-dom';
import './routes.css';

class Routes extends React.Component {
    render(){
        // let match = useRouteMatch();
        return (
            <div>
                <Link to="/routes/oneway">One way</Link>
                <Link to="/routes/twoway">Two way</Link>
                <NavLink to="/routes/threeway">Three way</NavLink>
                <NavLink to="/routes/fourway">Four way</NavLink>
                <Switch>
                    <Route path="/routes/oneway">
                        <div>One Way</div>
                    </Route>
                    <Route path="/routes/twoway">
                        <div>Two Way</div>
                    </Route>
                    <Route path="/routes/threeway">
                        <div>Three Way</div>
                    </Route>
                    <Route path="/routes/fourway">
                        <div>Four Way</div>
                    </Route>
                    <Route path="/">
                        <div>No Way</div>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Routes;
