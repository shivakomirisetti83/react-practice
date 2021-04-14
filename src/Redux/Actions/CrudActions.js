import {ADD_USER, UPDATE_NAME, UPDATE_AGE, EDIT_USER} from '../ActionType';


const adduser = (payload) => ({
    type:ADD_USER,
    payload
})
const updatename = (payload) =>({
    type:UPDATE_NAME,
    payload
})

const updateage = (payload) =>({
    type:UPDATE_AGE,
    payload
})

const edit = (payload) =>({
    type:EDIT_USER,
    payload
})

const crudActions ={
    adduser,
    updatename,
    updateage,
    edit
}

export default crudActions;