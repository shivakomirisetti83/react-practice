import {UPDATE_CLOTHES, GET_CLOTHES_FAILURE} from '../ActionType';
import getClothesService from '../../Services/ClotheService';

const getClothes = () => async (dispatch) => {
    try {
        const data = await getClothesService();
        dispatch(updateCloths(data));    
    }
    catch(err) {
        dispatch(getClothesFailure("Internal Server error"))
    }
}

const updateCloths = payload => ({
    type: UPDATE_CLOTHES,
    payload
});

const getClothesFailure = payload => ({
    type: GET_CLOTHES_FAILURE,
    payload
})

const clothesActions = {
    getClothes,
    updateCloths,
    getClothesFailure

}

export default clothesActions;
