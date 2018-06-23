import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './Summary';
import Register from './Register';
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';
import Login from './Login';
import Onboard from './Onboard';

import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import { createStore, applyMiddleware } from 'redux'
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './Reducers'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

let store = createStore(
	rootReducer,
	applyMiddleware(thunk, logger)
)


ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add" component={AddProduct} />
        <Route path="/summary" component={Summary} />
        <Route path="/me" component={Dashboard} />
        <Route path="/hello" component={Onboard} />
      </Router>
	</Provider>,
  document.getElementById('root')
);
