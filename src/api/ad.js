import axios from 'axios';
import { API_BASE_URL } from './main';
axios.defaults.withCredentials = true;

export const invokeAdList = function (params, successHandler, errorHandler) {
    axios.get(API_BASE_URL+"ad-list", {
        params: params
    }).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

