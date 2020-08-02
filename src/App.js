import React, { Suspense, lazy } from 'react';
import {
    Switch,
    Route,
    HashRouter as Router,
    NavLink as Link
} from 'react-router-dom';
import './App.css';
const LifeCycle = lazy(() => import('./pages/lifecycle'));
const Routes = lazy(() => import('./pages/routes'));
const PropType = lazy(() => import('./pages/proptype'));
const Fragments = lazy(() => import('./pages/fragments'));
const ErrorBoundaries = lazy(() => import('./pages/errorBoundaries'));
const ReduxToDoList = lazy(() => import('./pages/redux-todo-list'));
const ReduxUserList = lazy(() => import('./pages/redux-userlist'));
const Hooks = lazy(() => import('./pages/hooks'));
const Context = lazy(() => import('./pages/context'));
const WebSocket = lazy(() => import('./pages/websocket'));
const ImageSearch = lazy(() => import('./pages/ImageSearch'));

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div className="app-container">
                <Router>
                    <Link to="/lifecycle">LifeCycle</Link>
                    <Link to="/routes">Routes</Link>
                    <Link to="/proptype">Prop Type</Link>
                    <Link to="/fragments">Fragments</Link>
                    <Link to="/errorboundaries">Error Boundaries</Link>
                    <Link to="/redux-todo-list">Redux Todo List</Link>
                    <Link to="/redux-userlist">Redux User List</Link>
                    <Link to="/hooks">Hooks</Link>
                    <Link to="/context">Context</Link>
                    <Link to="/websocket">Web socket</Link>
                    <Link to="/image-search">Image Search</Link>
                    <br/><br/>
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
                            <Route path="/redux-todo-list">
                                <ReduxToDoList/>
                            </Route>
                            <Route path="/redux-userlist">
                                <ReduxUserList/>
                            </Route>
                            <Route path="/hooks">
                                <Hooks/>
                            </Route>
                            <Route path="/context">
                                <Context/>
                            </Route>
                            <Route path="/websocket">
                                <WebSocket/>
                            </Route>
                            <Route path="/image-search">
                                <ImageSearch/>
                            </Route>
                        </Switch>
                    </Suspense>
                </Router>
            </div>
        );
    }
}
export default App;
