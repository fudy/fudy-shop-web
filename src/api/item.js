import axios from 'axios';
import { API_BASE_URL } from './main';
axios.defaults.withCredentials = true;

export const invokeGetItemList = function (params, successHandler, errorHandler) {
    axios.get(API_BASE_URL+"items", {
        params: params
    }).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

