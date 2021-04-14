import { applyMiddleware, createStore, compose  } from 'redux';
import thunk from 'redux-thunk';
import rootreducers from './Reducers'
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootreducers, {}, composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store;