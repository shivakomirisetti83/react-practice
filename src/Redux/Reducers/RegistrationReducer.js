import {UPDATE_FASTNAME,UPDATE_LASTNAME,UPDATE_DATE_OF_BIRTH,UPDATE_GENDER,UPDATE_REG_EMAIL,UPDATE_CONTACT,SHOW_DETAILS} from '../../Redux/ActionType';

const initialState = {
        firstname: "",
        lastname:"",
        dob : "",
        gender : "",
        email : "",
        contact : "",
        showresults : false,
}

const registration = (state = initialState , action) => {

            const {type,payload} = action;

            switch(type){
                case UPDATE_FASTNAME :
                    return{...state, firstname:payload}
                case UPDATE_LASTNAME :
                    return{...state, lastname:payload}
                case UPDATE_DATE_OF_BIRTH :
                    return{...state, dob:payload}
                case UPDATE_GENDER :
                    return{...state, gender:payload}
                case UPDATE_REG_EMAIL:
                    return{...state, email:payload}
                case UPDATE_CONTACT :
                    return{...state, contact:payload}
                case SHOW_DETAILS :
                    return{...state,showresults:payload}
                default :
                    return state;    
            }
}

export default registration;