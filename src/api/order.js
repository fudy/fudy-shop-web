import axios from 'axios';
import { API_BASE_URL } from '@/api/main';
axios.defaults.withCredentials = true;

export const generateOrderID = function () {
    return axios.post(API_BASE_URL+"orders/ids", {});
}

