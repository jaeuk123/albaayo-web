<template>
    <div>
        <div>
            <b-navbar type="dark" variant="dark" class="fixed-top">
                <b-navbar-nav>
                    <b-nav-item router :to="{ name: 'MainContent'}">Home</b-nav-item>
                    <b-nav-item v-if="isLogin" @click="$store.dispatch('logout')">Logout</b-nav-item>
                    <b-nav-item v-if="isLogin" router :to="`/GroupList/${fetchedUser.Id}`">GroupList</b-nav-item>
                    <b-nav-item v-if="isLogin" router :to="`/invite/${fetchGroup}`">Invite</b-nav-item>
                    <b-nav-item v-if="isLogin" router :to="`/StaffList/${fetchGroup}`">StaffList</b-nav-item>
                    <b-nav-item v-if="isLogin" router :to="`/Schedule/${fetchGroup}`">Schedule</b-nav-item>
                    <b-nav-item v-if="isLogin" router :to="`/Notice/${fetchGroup}`">Notice</b-nav-item>
                    <b-nav-item v-else router :to="{ name: 'LoginPage'}">Login</b-nav-item>
                    <b-nav-item router :to="{ name: 'Intro'}">Intro</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <router-view class="container" />
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import {
      mapGetters,
        mapState
    } from "vuex";

    export default {
        name: 'App',
        components: {
        },
        data() {
            return {
                title: '알바에요',
                variant: 'dark',
                variants: [
                    'transparent',
                    'white',
                    'light',
                    'dark',
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',

                ]
            }
        },
        computed: {
            ...mapState(["isLogin"]),
            ...mapGetters(["fetchedUser","fetchGroup"]),
        },
        grouplist:{
            
        }
        ,
    };
</script>
<style>
    #menu1 {
        margin-left: 20px;
    }

    #menu2 {
        margin-left: 20px;
    }

    pageheader {
        margin-left: -8px;
        margin-top: -8px;
        margin-right: 0px;
        height: 100px;
        background-color: #8dc1e9;
        align-items: center;
        justify-content: space-between;
        display: flex;
    }

    /* 왼쪽 상단 로그 */
    #logo {
        margin-left: 40px;
        background-color: #8dc1e9;
        border-color: #8dc1e9;
    }

    /* 헤더안에 있는 중앙글자 */
    pageheader h4 {
        width: 100%;
        height: 100%;
        font-size: 40px;
        color: white;
        font-family: 'Yu Gothic';
        /* display: flex; */
    }

    /* 로그인 버튼 */
    #login {
        display: flex;
        margin-right: 40px;
        background-color: #8dc1e9;
        border-color: #8dc1e9;
    }
</style>