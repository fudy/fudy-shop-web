import axios from 'axios';
import { FUDY_SHOP_API_BASE_URL } from './main';
axios.defaults.withCredentials = true;

export const registerUser = function (params, successHandler, errorHandler) {
    axios.post(FUDY_SHOP_API_BASE_URL+"users",params).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const login = function (params, successHandler, errorHandler) {
    axios.post(FUDY_SHOP_API_BASE_URL+"user/login", params).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const logout = function (successHandler, errorHandler) {
    axios.post(FUDY_SHOP_API_BASE_URL+"user/logout").then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const smsLogin = function (params, successHandler, errorHandler) {
    axios.post(FUDY_SHOP_API_BASE_URL+"user/sms-login", params).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const modifyPassword = function (params, successHandler, errorHandler) {
    axios.post(FUDY_SHOP_API_BASE_URL+"user/password", params).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const getLoginUser = function (successHandler, errorHandler) {
    axios.get(FUDY_SHOP_API_BASE_URL+"user").then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}
