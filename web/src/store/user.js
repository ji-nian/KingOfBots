import router from '@/router';
import axios from 'axios'

export default {
    state: {
        id: "",
        username: "",
        photo: "",
        token: "",
        is_login: false,
    },
    getters: {
    },
    mutations: {
        updateUser(state, user) {
            state.id = user.id;
            state.username = user.username;
            state.photo = user.photo;
            state.is_login = user.is_login;
        },
        updateToken(state, token) {
            state.token = token
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.photo = "";
            state.token = "";
            state.is_login = false;
        }
    },
    actions: {
        login(context, data) {
            axios({
                url: 'http://127.0.0.1:3000/user/account/token/',
                method: 'post',
                data: {
                    username: data.username,
                    password: data.password
                }
            })
            .then(function (response) {
                if (response.data.error_message === "success") {
                    localStorage.setItem("jwt_token", response.data.token);
                    context.commit("updateToken", response.data.token);
                    data.success(response);
                } else {
                    data.error(response);
                }
            })
            .catch(function (error) {
                data.error(error);
            });
        },
        getInfo(context, data) {
            axios({
                url: 'http://127.0.0.1:3000/user/account/info/',
                method: 'get',
                headers: {
                    Authorization: "Bearer " + context.state.token,
                },
            })
            .then(function success(response) {
                if (response.data.error_message === "success") {
                    context.commit("updateUser", {
                        ...response.data, 
                        is_login: true,
                    });
                    data.success(response);
                } else {
                    data.error(response);
                }
            })
            .catch(function (error) {
                data.error(error);
            });
        },
        logout(context) {
            localStorage.removeItem("jwt_token");
            context.commit("logout");
            router.push({ name: "user_account_login" });
        }
    },
    modules: {
    }
}