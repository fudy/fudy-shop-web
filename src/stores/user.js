import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
        userName: null,
        avatar: null
    }
  },
  actions: {
    clear() {
      this.userName = null;
      this.avatar = null;
    },
  },
  persist:true
})