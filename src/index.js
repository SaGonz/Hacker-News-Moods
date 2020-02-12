import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';

//Prepend necessary path and make router work in production
export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
