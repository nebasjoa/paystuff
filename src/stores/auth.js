// Change the export to default
import { defineStore } from 'pinia';

const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false,
        username: 'ct_productmanagement',
        password: 'kogDwjYjVUTX8Gp8HHqv'
    }),

    actions: {
        logout() {
            this.username = null;
            this.isAuthenticated = false;
        },
    },

    getters: {
        getUsername: (state) => state.username,
        getPassword: (state) => state.password,
        isLoggedIn: (state) => state.isAuthenticated,
    },

    persist: true,
});

export default useAuthStore;  // Default export
