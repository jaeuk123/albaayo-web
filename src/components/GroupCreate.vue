<template>
<div class="desktop" style="font-family: bamin;">
    <div>
        <h1 id="GroupCreate_h1">그룹 생성</h1>
            <p id="input_number">사업자 등록 번호:</p>
                <b-form-input
                    id="input-3"
                    v-model="form.Number"
                    placeholder="Enter Company Registration Number"
                    required
                >
                </b-form-input>

            <p id="input_gname">그룹명:</p>
                <b-form-input
                    id="input-4"
                    v-model="form.Name"
                    placeholder="Enter Group Name"
                    required
                >
                </b-form-input>

            <p id="input_address">주소:</p>
                <b-form-input
                    id="input-5"
                    v-model="form.address"
                    placeholder="Enter Address"
                    required
                >
                </b-form-input>
            <div style="text-align: center">
                <b-button variant="outline-primary" id="cancelbtn" router :to="`/GroupList/${fetchedUser.Id}`">취소</b-button>
                <b-button variant="outline-primary" id="submitbtn" v-on:click='CREATE_GROUP({form})' router :to="`/GroupList/${fetchedUser.Id}`">확인</b-button>
            </div>    
    </div>
    <div class="contents">
  <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="https://cdn.wallpaperhub.app/cloudcache/e/1/1/c/c/1/e11cc11bc54695a5605a987ae3868b4467da9029.jpg">
    </div>
    </div>
    </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";


export default {
    data() {
      return {
        form: {
          Number: '',
          Name: '',
          address: ''
        },
        show: true
      }
    },
    computed: {
        
        ...mapGetters(['fetchedUser']),
    },
    methods:{
            ...mapActions(['CREATE_GROUP']),
        }
  }

</script>

<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }
    #cancelbtn {
        margin-right: 360px;
        margin-top: 40px;
        background-color: black;
        color: aliceblue;
    }
    #submitbtn {
        margin-top: 40px;
        background-color: black;
        color: aliceblue;
    }
    #GroupCreate_h1 {
        text-align: center;
        margin-top: 75px;
        /* margin-left: 700px;
        margin-top: 20px; */
        color: aliceblue;
    }
    #input_number {
        text-align: center;
        margin-right: 345px;
        margin-top: 30px;
        color: aliceblue;
    }
    #input_gname {
        text-align: center;
        margin-right: 415px;
        margin-top: 30px;
        color: aliceblue;
    }
    #input_address {
        text-align: center;
        margin-right: 430px;
        margin-top: 30px;
        color: aliceblue;
    }
    #input-3 {
        margin: 0 auto;
        width: 465px;
    }
    #input-4 {
        margin: 0 auto;
        width: 465px;
    }
    #input-5 {
        margin: 0 auto;
        width: 465px;
    }
</style>