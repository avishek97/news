import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './component/Home';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import xyz from './site'
import {Provider} from 'react-redux'

export const store=createStore(xyz,applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('root')) 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
