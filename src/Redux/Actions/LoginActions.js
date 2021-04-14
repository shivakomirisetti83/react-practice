import {UPDATE_EMAIL,UPDATE_PASSWORD} from '../ActionType';

const updateEmail = (email) =>({
    type:UPDATE_EMAIL,
    payload:email,
})

const updatepassword = (password) =>({
    type: UPDATE_PASSWORD,
    payload: password,
})

export const loginactions = {
    updateEmail,
    updatepassword
}