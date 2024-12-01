import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.26.224.1:3000' 
});

export default api;