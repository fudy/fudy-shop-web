import axios from 'axios';
import { API_HOMEPAGE_BASE_URL, API_ITEM_DETAIL_BASE_URL } from './main';
axios.defaults.withCredentials = true;

export const invokeGetItemList = function (params, successHandler, errorHandler) {
    axios.get(API_HOMEPAGE_BASE_URL + "items", {
        params: params
    }).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const invokeGetItem = function (params, successHandler, errorHandler) {
    axios.get(API_ITEM_DETAIL_BASE_URL + "item/"+params.itemId, {
        params: params
    }).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const invokeGetItemFeedbackList = function (params, successHandler, errorHandler) {
    axios.get(API_ITEM_DETAIL_BASE_URL + "item-feedbacks", {params:params}).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const invokeLikeItemFeedback = function (feedbackId, itemId, successHandler) {
    axios.post(API_ITEM_DETAIL_BASE_URL + "item-feedbacks/"+feedbackId+"?itemId="+itemId, {}).then(res=>{
        successHandler(res.data);
    },err=>{
        errorHandler(err.message);
    })
}

export const invokeSearchItems = function(params) {
    return axios.get(API_HOMEPAGE_BASE_URL+"search/items", {params : {
        keyword : params.keyword,
        sortField:  params.sortField,
        sortOrder:  params.sortOrder
    }});
}

export const invokeCategorySearchItems = function(params) {
    return axios.get(API_HOMEPAGE_BASE_URL+"category-search/items", {params : {
        categoryId : params.categoryId,
        sortField:  params.sortField,
        sortOrder:  params.sortOrder
    }});
}
