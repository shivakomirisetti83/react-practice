import {ACTIVATE_GEOD, CLOSE_GEOD} from '../ActionType';


const activateGeod = (geod) =>({
    type: ACTIVATE_GEOD,
    payload :geod,

});

const closeGeod = () =>({
    type:CLOSE_GEOD,

});

export const actions = {
        activateGeod,
        closeGeod
};