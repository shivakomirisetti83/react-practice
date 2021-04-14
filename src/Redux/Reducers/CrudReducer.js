import {ADD_USER, UPDATE_NAME, UPDATE_AGE, EDIT_USER} from '../ActionType';

const initailState = {    
    adduser:{name:"",age:""},
    users:[
        {name:"shiva",age:23, editable: false},
        {name:"venkat",age:24, editable: false},
        {name:"sai",age:25, editable: false}
    ]
}

const crudreducer = (state = initailState, action) =>{
        const{type,payload}=action;
    switch(type){
        case UPDATE_NAME :
            return{...state, adduser: {...state.adduser, name: payload }}
        case UPDATE_AGE :
            return{...state, adduser: {...state.adduser, age: payload }}
        case ADD_USER :
            return{...state, users:payload}
        case EDIT_USER: 
            return {...state, users: payload}
        default :
            return state;    
    }
}

export default crudreducer;