import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index.js';

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
    console.log('rejectAuthUser');
    if (store.state.isLogin === true) {
      // 이미 로그인 된 유저는 막는다.
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
      // 아직 로그인이 안된 유저는 막는다.
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
            import(/* webpackChunkName: "MainContent*/ "../components/MainContent.vue"),
    },
    {
        path: '/Schedule/:groupid',
        name: 'Schedule',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "Schedule*/ "../views/Schedule.vue"),
    },
    {
        path: '/invite/:groupid',
        name: 'invite',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "invite*/ "../views/invite.vue"),
    },
    {
        path: '/LoginPage',
        name: 'LoginPage',
        beforeEnter: rejectAuthUser,
        component: () =>
            import(/* webpackChunkName: "LoginPage*/ "../components/LoginPage.vue"),
    },
    {
        path: '/SignUpPage',
        name: 'SignUpPage',
        component: () =>
            import(/* webpackChunkName: "SignUpPage*/ "../components/SignUpPage.vue"),
    },
    {
        path: '/GroupList/:id',
        name: 'GroupList',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "GroupList*/ "../components/GroupList.vue"),
        
    },
    {
        path: '/GroupCreate/:id',
        name: 'GroupCreate',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "GroupCreate*/ "../components/GroupCreate.vue"),
    },
    {
        path: '/Notice/:groupid',
        name: 'Notice',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "Notice*/ "../components/Notice.vue"),
    },
    {
        path: '/NoticeCreate/:contentId?',
        name: 'NoticeCreate',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "NoticeCreate*/ "../components/NoticeCreate.vue"),
    },
    {
        path: '/Noticeupdate/:contentId?',
        name: 'Noticeupdate',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "NoticeCreate*/ "../components/Noticeupdate.vue"),
    },
    {
        path: '/NoticeDetail/:contentId',
        name: 'NoticeDetail',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "NoticeDetail*/ "../components/NoticeDetail.vue"),
    },
    {
        path: '/StaffList/:groupid',
        name: 'StaffList',
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "StaffList*/ "../components/StaffList.vue"),
    },
    {
        path: "/mypage",
        name: "mypage",
        beforeEnter: onlyAuthUser,
        component: () =>
            import(/* webpackChunkName: "mypage*/ "../views/Mypage.vue"),
    },
    {
        path: "/Intro",
        name: "Intro",
        component: () =>
            import(/* webpackChunkName: "mypage*/ "../components/Intro.vue"),
    },
]

  
const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router;