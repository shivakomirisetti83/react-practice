import {UPDATE_FASTNAME,UPDATE_LASTNAME,UPDATE_DATE_OF_BIRTH,UPDATE_GENDER,UPDATE_REG_EMAIL,UPDATE_CONTACT,SHOW_DETAILS} from '../ActionType';

const updatefname = (fastname) =>({
    type:UPDATE_FASTNAME,
    payload:fastname,
})

const updatelname = (lastname) =>({
    type:UPDATE_LASTNAME,
    payload:lastname,
})

const updatedateofbirth = (dob) =>({
    type:UPDATE_DATE_OF_BIRTH,
    payload:dob,
})

const updategender = (gender) =>({
    type:UPDATE_GENDER,
    payload:gender,
})

const updateemail =(email) =>({
    type:UPDATE_REG_EMAIL,
    payload:email,
})

const updatecontact = (contact) =>({
    type:UPDATE_CONTACT,
    payload:contact,
})
const seedetails = (payload) =>({
    type:SHOW_DETAILS,
    payload
})

export const registrationactions ={
        updatefname,
        updatelname,
        updatedateofbirth,
        updategender,
        updateemail,
        updatecontact,
        seedetails
}