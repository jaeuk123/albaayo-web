import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js';

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
    console.log('rejectAuthUser');
    if (store.state.isLogin === true) {
      alert("이미 로그인하였습니다.");
      next("/");
    } else {
      next();
    }
};
  
const onlyAuthUser = (to, from, next) => {
    console.log('onlyAuthUser');
    console.log(store.state.isLogin);
    if (store.state.isLogin === false) {
      alert("로그인이 필요한 기능입니다.");
      next("/");
    } else {
      next();
    }
};

const routes = [
    {
        path: '/',
        name: 'MainContent',
        component: () =>
            import("../components/MainContent.vue"),
    },
    {
        path: '/Schedule/:groupid',
        name: 'Schedule',
        beforeEnter: onlyAuthUser,
        component: () =>
            import("../views/Schedule.vue"),
    },
    {
        path: '/invite/:groupid',
        name: 'invite',
        beforeEnter: onlyAuthUser,
        component: () =>
            import( "../views/invite.vue"),
    },
    {
        path: '/LoginPage',
        name: 'LoginPage',
        beforeEnter: rejectAuthUser,
        component: () =>
            import( "../components/LoginPage.vue"),
    },
    {
        path: '/SignUpPage',
        name: 'SignUpPage',
        component: () =>
            import( "../components/SignUpPage.vue"),
    },
    {
        path: '/GroupList/:id',
        name: 'GroupList',
        beforeEnter: onlyAuthUser,
        component: () =>
            import( "../components/GroupList.vue"),
        
    },
    {
        path: '/GroupCreate/:id',
        name: 'GroupCreate',
        beforeEnter: onlyAuthUser,
        component: () =>
            import( "../components/GroupCreate.vue"),
    },
    {
        path: '/Notice/:groupid',
        name: 'Notice',
        beforeEnter: onlyAuthUser,
        component: () =>
            import( "../components/Notice.vue"),
    },
    {
        path: '/NoticeCreate/:contentId?',
        name: 'NoticeCreate',
        beforeEnter: onlyAuthUser,
        component: () =>
            import( "../components/NoticeCreate.vue"),
    },
    {
        path: '/Noticeupdate/:contentId?',
        name: 'Noticeupdate',
        beforeEnter: onlyAuthUser,
        component: () =>
            import( "../components/Noticeupdate.vue"),
    },
    {
        path: '/NoticeDetail/:contentId',
        name: 'NoticeDetail',
        beforeEnter: onlyAuthUser,
        component: () =>
            import( "../components/NoticeDetail.vue"),
    },
    {
        path: '/StaffList/:groupid',
        name: 'StaffList',
        beforeEnter: onlyAuthUser,
        component: () =>
            import( "../components/StaffList.vue"),
    },
    {
        path: "/Intro",
        name: "Intro",
        component: () =>
            import("../components/Intro.vue"),
    },
]

  
const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router;