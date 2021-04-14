import {UPDATE_EMAIL,UPDATE_PASSWORD} from '../ActionType';


const initialState ={
     email:"",
     password:"",
}

const login = (state = initialState, action) =>{

    const{type,payload} = action;

    switch(type){
        case UPDATE_EMAIL :
            return {...state, email:payload}
        case UPDATE_PASSWORD :
            return{...state,password:payload}
        default :
            return state;

    }
}

export default login;