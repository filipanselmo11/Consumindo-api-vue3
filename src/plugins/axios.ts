import axios from 'axios';
// const corsOptions = {
//     origin:'https://anime-facts-rest-api.herokuapp.com',
// }

const axiosIns = axios.create({
    baseURL: 'https://anime-facts-rest-api.herokuapp.com',
    timeout: 2000,
    headers: {
        "Access-Control-Allow-Origin": "https://anime-facts-rest-api.herokuapp.com",
    },
});


export default axiosIns;