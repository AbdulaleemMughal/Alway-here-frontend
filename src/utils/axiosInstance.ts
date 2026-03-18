import axios from 'axios';
import { getTokenFromLocalStorage } from './auth';
import { BASE_URL } from '../constant/baseUrl';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
});

axiosInstance.interceptors.request.use((config) => {
    const token = getTokenFromLocalStorage();
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})