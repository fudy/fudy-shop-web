import axios from 'axios';
import { API_BASE_URL } from './main';

export const registerUser = function (params, successHandler, errorHandler) {
    axios.post(API_BASE_URL+"users",params).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err);
    })
}