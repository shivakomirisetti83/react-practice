import {combineReducers} from 'redux';
import geod from './Reducers/HomeReducers';
import Login from './Reducers/LoginReducer';
import registration from './Reducers/RegistrationReducer';
import clothesReducer from './Reducers/ClothesReducers';
import showReducer from './Reducers/ShowReducer';
import crudreducer from './Reducers/CrudReducer';



const rootreducers = combineReducers({geod,Login,registration, clothes: clothesReducer, show: showReducer, crud: crudreducer});

export default rootreducers;

