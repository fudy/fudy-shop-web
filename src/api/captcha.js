import axios from 'axios';
import { FUDY_SHOP_API_BASE_URL } from './main';

export const sendRegisterUserCaptcha = function (params, successHandler, errorHandler) {
    const request = Object.assign({}, params, {type:'captcha-user-registry'}); 
    axios.post(FUDY_SHOP_API_BASE_URL+"captcha", request).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err);
    })
}

export const sendLoginCaptcha = function (params, successHandler, errorHandler) {
    const request = Object.assign({}, params, {type:'captcha-user-login'});
    axios.post(FUDY_SHOP_API_BASE_URL+"captcha", request).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err);
    })
}

export const sendForgetPasswordCaptcha = function (params, successHandler, errorHandler) {
    const request = Object.assign({}, params, {type:'captcha-forget-password'});
    axios.post(FUDY_SHOP_API_BASE_URL+"captcha", request).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err);
    })
}

export const IMAGE_CAPTCHA_SRC = FUDY_SHOP_API_BASE_URL + "image-captcha"