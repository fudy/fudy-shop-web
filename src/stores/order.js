import { defineStore } from 'pinia';

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    // 初始化一个空对象，用于存放不同订单的数据
    orderMap: {},
  }),
  getters: {
    getOrderById(state) {
      return (id) => state.orderMap[id];
    }
  },
  actions: {


    // 添加一个新的订单详情
    addOrder(orderId, order) {
      this.orderMap[orderId] = order;
    },

    // 删除一个订单详情
    removeOrderDetails(orderId) {
      delete this.orderMap[orderId];
    },
  },
});