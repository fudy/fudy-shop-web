import axios from 'axios';
import { API_BASE_URL } from '@/api/main';
axios.defaults.withCredentials = true;

export const generateOrderID = function () {
    return axios.post(API_BASE_URL+"orders/ids", {});
}

export const placeOrder = function(params) {
    const body = {
        orderId: params.orderId,
        actualAmount: params.actualAmount,
        discountAmount: params.discountAmount,
        totalAmount: params.totalAmount,
        deliveryAddressId: params.deliveryAddressId,
        freightAmount: params.freightAmount,
        note: params.note,
        orderItemDTOList: params.orderItemDTOList
    }
    return axios.post(API_BASE_URL+"orders", body);
}

