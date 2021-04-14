import { createStore } from 'redux';
import geodreducers from '../../reducers';
  
const store = createStore(geodreducers, {});

export default store;