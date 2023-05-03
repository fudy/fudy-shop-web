import axios from 'axios';
import { API_BASE_URL } from './main';
axios.defaults.withCredentials = true;

export const invokeGetItemList = function (params, successHandler, errorHandler) {
    axios.get("http://localhost:8080/api/items", {
        params: params
    }).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const invokeGetItem = function (params, successHandler, errorHandler) {
    axios.get("http://localhost:8889/api/item/"+params.itemId, {
        params: params
    }).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const invokeGetItemFeedbackList = function (params, successHandler, errorHandler) {
    axios.get("http://localhost:8889/api/item-feedbacks", {params:params}).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}
