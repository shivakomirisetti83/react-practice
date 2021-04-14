import {UPDATE_SHOW_LIST, GET_SHOWLIST_FAILURE, UPDATE_INPUT } from '../ActionType';
import showService from '../../Services/ShowService';




const updateinput = (input) =>({
    type:UPDATE_INPUT,
    payload:input,
})

const getShowList = (payload) => async (dispatch) => {
        try{
            const data = await showService(payload);
            dispatch(updateshowlist(data));
        }
        catch(err){
            dispatch(updateshowlistfailure("Internal server error"));
        }  
}


const updateshowlist = payload =>({
    type:UPDATE_SHOW_LIST,
    payload
})

const updateshowlistfailure = payload =>({
    type:GET_SHOWLIST_FAILURE,
    payload
})




 const showActions = {
    getShowList,
    updateshowlist,
    updateshowlistfailure,
    updateinput
}
export default showActions;