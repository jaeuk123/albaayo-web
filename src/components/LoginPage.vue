<template>
<div class="desktop">
    <div style="font-family: bamin;">
        <v-alert
            class="mb-3"
            :value="isLoginError"
            type="error"
        >
        가입하지 않은 아이디이거나 잘못된 비밀번호입니다.
        </v-alert>
        <v-alert
            class="mb-3"
            :value="isLogin"
            type="success"
        >
        로그인이 완료되었습니다.
        </v-alert>
        <h1 id="signIn_h1">로그인</h1>
        <br><br>
            <p id="input_id">아이디: </p>   
                <b-form-input
                    id="signIn_input-3"
                    v-model="email"
                    placeholder="Enter ID"
                    required
                >
                </b-form-input>
                <br><br>
            <p id="input_password">비밀번호: </p>
                <b-form-input
                    id="signIn_input-4"
                    v-model="password"
                    placeholder="Enter Password"
                    required
                    type="password"
                >
                </b-form-input>
        <div style="text-align: center">
            <b-button 
                variant="outline-primary" 
                id="signIn_submitbtn" 
                v-on:click="FETCH_LOGIN({ email, password })"
            >
                로그인
            </b-button>
        </div>
    </div>
   <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="https://cdn.wallpaperhub.app/cloudcache/e/1/1/c/c/1/e11cc11bc54695a5605a987ae3868b4467da9029.jpg">
   </div>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
    data() { 
      return {
          email: null,
          password: null
      }
    },
    computed: {
        ...mapState(["isLogin", "isLoginError"])
    },
    methods: {
        ...mapActions(["FETCH_LOGIN"]),
    }
  }
</script>

<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }

    #signIn_singupbtn {
        margin-right: 357px;
        margin-top: 75px;
        color: aliceblue;
        background-color: black;
    }
    #signIn_submitbtn {
        margin-top: 75px;
        color: aliceblue;
        background-color: black;
    }
    #signIn_h1 {
        text-align: center;
        margin-top: 75px;
        color: aliceblue;
    }
    #input_id {
        text-align: center;
        margin-right: 445px;
        margin-top: 20px;
        color: aliceblue;
    }
    #input_password {
        text-align: center;
        margin-right: 430px;
        margin-top: 10px;
        color: aliceblue;
    }
    #signIn_input-3 {
        margin: 0 auto;
        width: 500px;
    }
    #signIn_input-4 {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0 auto;
        width: 500px;
    }
</style>