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
                url: 'http://127.0.0.1:8080/user/account/token/',
                method: 'post',
                data: {
                    username: data.username,
                    password: data.password
                }
            })
            .then(function (response) {
                if (response.data.error_message === "success") {
                    context.commit("updateToken", response.data.token);
                    data.success(response.data);
                } else {
                    data.error(response.data);
                }
            })
            .catch(function (error) {
                data.error(error);
            });
        },
        getInfo(context, data) {
            axios({
                url: 'http://127.0.0.1:8080/user/account/info/',
                method: 'get',
                headers: {
                    Authorization: "Bearer " + context.state.token,
                },
            })
            .then(function (response) {
                if (response.data.error_message === "success") {
                    context.commit("updateUser", {
                        ...response.data, 
                        is_login: true,
                    });
                    data.success(response.data);
                } else {
                    console.log(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        logout(context) {
            context.commit("logout");
        }
    },
    modules: {
    }
}