<template>
  <div class="desktop">
    <div id="app" class="GroupList">
      <h1 id="group_list_h1" style="font-family: bamin;">그룹이 없으신가요? 또는 그룹을 생성하시겠습니까?</h1>
      <!-- <h1>Don't you have any Group? or create new Group?</h1> -->
        <div style="text-align: center">
          <b-button variant="outline-primary" id="createbtn" router :to="`/GroupCreate/${fetchedUser.Id}`">그룹생성</b-button>
        </div>
          <p></p>
          <div style="text-algin: center">
            <b-container id="cont">
              <b-row>
                <b-col cols="12">
                  <carousel :perPage="3">
                    <slide class="p-2" v-for="group in fetchedGrouplist" v-bind:key="group.name">
                      <b-card style="font-family: bamin;" img-alt="Image" img-top tag="article">
                        <b-card-text >
                          {{ group.name}}
                        </b-card-text>
                          <b-button router :to="`/StaffList/${group.companyId}`">그룹 이동하기</b-button>
                      </b-card>
                    </slide>
                  </carousel>
                </b-col>
              </b-row>
            </b-container>
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

import { Carousel, Slide } from 'vue-carousel';
import {mapGetters} from 'vuex'

  export default {
    el: "#app",
    components: {
        Carousel,
        Slide
    },
    
    created(){
      // const Id = this.$route.params.id;
      this.$store.dispatch('Fetch_Grouplist',this.fetchedUser.Id);
      // console.log(this.fetchedUser.Id)
    },

    computed:{
      ...mapGetters(['fetchedUser','fetchedGrouplist']),
    },

    methods:{
      
    },

  }
</script>
<style>
    @FONT-FACE {
        font-family: 'bamin';
        src:url(../assets/BMHANNAPro.ttf);
    }
    #cont {
      margin: 0 auto;
    }
    .row{
    margin-top:100px;
    }
    #group_list_h1 {
        text-align: center;
        margin-top: 60px;
        color: aliceblue;
    }
    #createbtn {
        margin-top: 20px;
    }
</style>