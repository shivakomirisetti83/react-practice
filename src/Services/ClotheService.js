import axios from 'axios';

const getClothesService = () => {
    return axios.get('cloths.json').then(res => res.data);
}

export default getClothesService;