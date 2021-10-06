<template>
<div class="desktop">
  <div class="text">
      <h1 id="maintext1" style="font-family: bamin;">알바관리 시스템</h1>
      <h2 id="maintext2" style="font-family: bamin;">WITH 블록체인</h2>
    </div>
  <div class="contents">
  <div style="position: absolute; z-index: -1; inset: 0px; overflow: hidden; baclground-size:cover; background-position: 50% 50%">
    <span class="main-arrow" style="position: absolute;"></span>
    <img width="100%" src="https://cdn.wallpaperhub.app/cloudcache/e/1/1/c/c/1/e11cc11bc54695a5605a987ae3868b4467da9029.jpg">
     <!-- <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="800"
      img-height="600"
      style="margin-top: 65px; width: 800px; text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    > -->
      <!-- Text slides with image -->
      <!-- <b-carousel-slide>
        <template #img>
          <img
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            width="800"
            height="600"
            src="../img/mainpage.png"
          >
        </template>
      </b-carousel-slide> -->

      <!-- <b-carousel-slide>
        <template #img>
        <img
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          src="../img/main2.png"
          width="800"
          height="600"
        >
        </template>
      </b-carousel-slide> -->

      <!-- Slides with custom text -->
      <!-- <b-carousel-slide >
        <template #img>
        <img
          src="https://www.foodnews.news/data/photos/20200624/art_15918374067968_096a43.png"
          width="800"
          height="600"
        >
        </template> -->
        <!-- <h1>Hello world!</h1> -->
      <!-- </b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template #img>
          <img
            width="800"
            height="600"
            src="https://blog.kakaocdn.net/dn/KcxQN/btqtXW2ZWah/or4dQhEx9gFo6CXphJ1AX1/img.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    <!-- </b-carousel> -->

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
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
    // methods: {
    //   onSlideStart(slide) {
    //     this.sliding = true
    //   },
    //   onSlideEnd(slide) {
    //     this.sliding = false
    //   }
    // }
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