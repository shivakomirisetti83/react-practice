import {combineReducers } from 'redux';
import { ACTIVATE_GEOD, CLOSE_GEOD} from '../ActionType';
import Login from './LoginReducer';

const initialState ={
        title: "",
}

const geod = (state = initialState, action) => {
    const {type,payload}=action;
    switch(type) {
        case ACTIVATE_GEOD :
            return {...state, title: payload.title};
           
         case CLOSE_GEOD :
             return initialState;
             
        default :
            return state;     
    }


}



export default geod;
