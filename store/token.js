import { defineStore } from 'pinia';

export const useTokenStore = defineStore('token', {
  state: () => {
    return { token: '' }
  },
  persist: {
    storage: persistedState.localStorage,
  },
  actions: {
    setToken(tokenValue) {
      this.token = tokenValue;
    }
  },
  getters: {
    authToken() {
      return this.token;
    }
  }
})