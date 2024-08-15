import { defineStore } from 'pinia';
import { useTokenStore } from "~/store/token";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    async login(authBody) {
      try {
        const { message, token } = await $fetch(
          "http://localhost:5000/api/journey-auth/login",
          {
            method: "POST",
            body: {
              ...authBody
            },
          }
        );
        this.isAuthenticated = message === 'Success';
        const tokenStore = useTokenStore();
        tokenStore.setToken(token);
        return message;
      } catch (error) {
        return message;
      }
    }
  }
})