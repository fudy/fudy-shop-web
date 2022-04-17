import axios from 'axios';
import { API_BASE_URL } from './main';

export const sendRegisterUserCaptcha = function (params, successHandler, errorHandler) {
    const request = Object.assign({}, params, {type:'captcha-user-registry'});
    axios.post(API_BASE_URL+"captcha", request).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err);
    })
}