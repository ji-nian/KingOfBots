import { createRouter, createWebHistory } from 'vue-router' 
import PkIndexView from '@/views/pk/PkIndexView'
import RecordIndexView from '@/views/record/RecordIndexView'
import RecordContentView from '@/views/record/RecordContentView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView'
import UserBotIndexView from '@/views/user/bot/UserBotIndexView'
import NotFound from '@/views/error/NotFound'
import UserAccountLoginView from '@/views/user/account/UserAccountLoginView'
import UserAccountRegisterView from '@/views/user/account/UserAccountRegisterView'
import store from '@/store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/pk/',
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/pk/',
    name: 'pk_index',
    component: PkIndexView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/record/',
    name: 'record_index',
    component: RecordIndexView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/record/:record_id/',
    name: 'record_content',
    component: RecordContentView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/ranklist/',
    name: 'ranklist_index',
    component: RanklistIndexView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/user/bot/',
    name: 'user_bot_index',
    component: UserBotIndexView,
    meta: {
        requestAuth: true,
    }
  },
  {
    path: '/user/account/login/',
    name: 'user_account_login',
    component: UserAccountLoginView,
    meta: {
        requestAuth: false,
    }
  },
  {
    path: '/user/account/register/',
    name: 'user_account_register',
    component: UserAccountRegisterView,
    meta: {
        requestAuth: false,
    }
  },
  {
    path: '/404/',
    name: '404',
    component: NotFound,
    meta: {
        requestAuth: false,
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 前端页面授权
router.beforeEach((to, from, next) => {
    if (to.meta.requestAuth && !store.state.user.is_login) {
        const jwt_token = localStorage.getItem("jwt_token");
        if (jwt_token) {
            store.commit("updateToken", jwt_token);
            store.dispatch("getInfo", {
                success() {
                    next();
                },
                error() {
                    // console.log(response);
                    alert("登录信息失效，请重新登录");
                    localStorage.removeItem("jwt_token");
                    next({name: "user_account_login"});
                }
            })
        } else {
            alert("您还未登录，请先登录");
            next({name: "user_account_login"});
        }
    } else {
        next();
    }
})

export default router
