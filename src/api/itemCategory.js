import axios from 'axios';
import { API_HOMEPAGE_BASE_URL } from './main';
axios.defaults.withCredentials = true;

export const invokeGetItemCategoryList = function (params, successHandler, errorHandler) {
    axios.get(API_HOMEPAGE_BASE_URL+"item-categories", {
        params: params
    }).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

