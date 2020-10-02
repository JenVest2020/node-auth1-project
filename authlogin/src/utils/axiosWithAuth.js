import axios from 'axios';
axios.defaults.withCredentials = true;

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'http://localhost:4050'
    });
}