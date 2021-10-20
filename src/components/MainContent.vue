<template>
<div class="desktop">
  <div class="text">
      <h1 id="maintext1" style="font-family: bamin;">알바관리 시스템</h1>
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
import { mapState } from "vuex";

  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    computed: {
    ...mapState(["isLogin"]),
    },
  }
</script>
<style>
  @FONT-FACE {
    font-family: 'bamin';
    src:url(../assets/BMHANNAPro.ttf);
  }
  #maintext1 {
    margin-top: 175px;
    font-size: 170px;
    color: aliceblue;
  }
  #maintext2 {
    margin-left: 800px;
    font-size: 135px;
    color: aliceblue;
  }
</style>