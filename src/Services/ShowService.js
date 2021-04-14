import axios from 'axios';


 const showService = (payload) =>{
    return axios.get('https://api.tvmaze.com/search/shows?q='+payload).then(res=> res.data);
 }

 export default showService;