import {UPDATE_CLOTHES, GET_CLOTHES_FAILURE} from '../ActionType';

const ClothesInitialState = {
    clothesList: [],
    errorMsg: ""
}

const clothesReducer = (state = ClothesInitialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case UPDATE_CLOTHES:
            return {...state, clothesList: payload, errorMsg: ""};
        case GET_CLOTHES_FAILURE: 
            return {...state, errorMsg: payload, clothesList: []};        
        default:
            return state;
    }
}

export default clothesReducer;