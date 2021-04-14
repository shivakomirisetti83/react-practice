import {UPDATE_SHOW_LIST, GET_SHOWLIST_FAILURE, UPDATE_INPUT } from '../ActionType';

const ShowinitialState ={
        input:"",
        showList:[],
        errMsg : ""

}

const showReducer = (state = ShowinitialState, action) => {
        const {type,payload} = action;

        switch(type){
            case UPDATE_INPUT :
                return{...state, input:payload}
            case UPDATE_SHOW_LIST :
                return{...state, showList:payload,errMsg:""}
            case GET_SHOWLIST_FAILURE :
                return {...state, errMsg:payload,showList:[]}
             default:
                return state;
        }
}

export default showReducer;