import React from 'react';
import ReactDOM from 'react-dom';
import App from'./App'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import reducer from './reducers/index'
const store = createStore(reducer, applyMiddleware(Thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));
