import axios from 'axios';
import { API_BASE_URL } from './main';
axios.defaults.withCredentials = true;

export const getHotSearchKeywords = function() {
    return axios.get(API_BASE_URL+"hot-search-keywords", {});
}