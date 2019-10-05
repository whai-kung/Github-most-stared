import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import history from './history'
import rootReducer from './reducers'

import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElem = document.getElementById('root')
const store = createStore(
  rootReducer,
  composeWithDevTools()
)

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootElem
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
